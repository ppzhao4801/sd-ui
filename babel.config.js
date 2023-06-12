module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "entry",
        corejs: 3,
        targets: {
          browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
        },
      },
    ],
    [
      "@vue/cli-plugin-babel/preset",
      {
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
  ],
  plugins: [
    // [
    //   "component",
    //   {
    //     libraryName: "element-ui",
    //     styleLibraryName: "theme-chalk",
    //   },
    // ],
  ],
};
