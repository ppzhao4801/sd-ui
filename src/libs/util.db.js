import low from "lowdb";
import SessionStorage from "./SessionStorage";
import { cloneDeep } from "lodash";

const adapter = new SessionStorage(`open`); //${process.env.VUE_APP_VERSION}
const db = low(adapter);

db.defaults({ database: {}, user: null }).write();

export default db;

/**
 * @description 检查路径是否存在 不存在的话初始化
 * @param {Object} payload dbName {String} 数据库名称
 * @param {Object} payload path {String} 路径
 * @param {Object} payload validator {Function} 数据校验钩子 返回 true 表示验证通过
 * @param {Object} payload defaultValue {*} 初始化默认值
 * @returns {String} 可以直接使用的路径
 */
function pathInit({ dbName = "database", path = "", validator = () => true, defaultValue = "" }) {
  const currentPath = `${dbName}${path ? `.${path}` : ""}`;
  const value = db.get(currentPath).value();
  if (!(value !== undefined && validator(value))) {
    db.set(currentPath, defaultValue).write();
  }
  return currentPath;
}

/**
 * @description 将数据存储到指定位置 | 路径不存在会自动初始化
 * @description 效果类似于取值 dbName.path = value
 * @param {Object} payload dbName {String} 数据库名称
 * @param {Object} payload path {String} 存储路径
 * @param {Object} payload value {*} 需要存储的值
 */
export function dbSet({ dbName = "database", path = "", value = "" }) {
  db.set(
    pathInit({
      dbName,
      path,
    }),
    value
  ).write();
}

/**
 * @description 获取数据
 * @description 效果类似于取值 dbName.path || defaultValue
 * @param {Object} payload dbName {String} 数据库名称
 * @param {Object} payload path {String} 存储路径
 * @param {Object} payload defaultValue {*} 取值失败的默认值
 */
export function dbGet({ dbName = "database", path = "", defaultValue = "" }) {
  return cloneDeep(
    db
      .get(
        pathInit({
          dbName,
          path,
          defaultValue,
        })
      )
      .value()
  );
}

/**
 * @description 获取存储数据库对象
 */
export function database({ dbName = "database", path = "", validator = () => true, defaultValue = "" } = {}) {
  return db.get(
    pathInit({
      dbName,
      path,
      validator,
      defaultValue,
    })
  );
}
