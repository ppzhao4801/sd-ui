const { defineConfig } = require("@vue/cli-service");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const { set, compact, map } = require("lodash");
const externals = {};
const { name } = require("./package");

const cdn = [
  // {
  //   name: "vue",
  //   library: "Vue",
  //   js: "/common/vue/2.6.14/dist/vue.min.js",
  // },
  // {
  //   name: "vue-router",
  //   library: "VueRouter",
  //   js: "/common/vue-router/3.5.4/dist/vue-router.min.js",
  // },
  // {
  //   name: "vuex",
  //   library: "Vuex",
  //   js: "/common/vuex/3.6.2/dist/vuex.min.js",
  // },
  // {
  //   name: "lodash",
  //   library: "_",
  //   js: "/common/lodash/4.17.21/lodash.min.js",
  // },
  // {
  //   name: "yxb-ui",
  //   library: "YXB",
  //   js: "/common/yxb-ui/0.0.2/lib/index.js",
  //   css: "/common/yxb-ui/0.0.2/lib/styles/index.css",
  // },
];
cdn.forEach((p) => {
  externals[p.name] = p.library;
});

module.exports = defineConfig({
  lintOnSave: true,
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: "dist",
  devServer: {
    host: "127.0.0.1",
    port: 8011,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      chunks: ["manifest", "index", "chunk-vendor", "chunk-common"],
    },
  },
  // 不输出 map 文件
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles/public.scss";',
      },
    },
  },
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: ["text-loader"],
    });
    const configNew = {
      output: {
        // 把子应用打包成 umd 库格式
        library: `${name}`,
        libraryTarget: "umd",
        chunkLoadingGlobal: `webpackJsonp_${name}`,
        // globalObject: 'this',
      },
    };
    if (process.env.NODE_ENV === "production") {
      configNew.externals = externals;
      configNew.plugins = [
        // gzip
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          filename: "[path][base].gz[query]",
          test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
          threshold: 1024 * 5,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        }),
      ];
    }
    return configNew;
  },
  chainWebpack: (config) => {
    config.optimization.runtimeChunk({
      name: "manifest",
    });
    config.optimization.splitChunks({
      cacheGroups: {
        // External dependencies common to all pages
        libs: {
          name: "chunk-vendor",
          chunks: "initial",
          minChunks: 1,
          test: /[\\/]node_modules[\\/]/,
          priority: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
        // Code common to all pages
        common: {
          name: "chunk-common",
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 2,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    });
    // Add the CDN settings to the settings of the htmlwebpackplugin plug-in
    config.plugin("html-index").tap((options) => {
      const setting = {
        css: compact(map(cdn, "css")),
        js: compact(map(cdn, "js")),
      };
      set(options, "[0].cdn", process.env.NODE_ENV === "production" ? setting : []);
      return options;
    });
  },
});
