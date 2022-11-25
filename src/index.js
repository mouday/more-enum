/**
 * 增强枚举对象
 * @param {Array} enums
 * @param {Object} config
 * @returns {Object}
 */
export function createEnumObject(enums, config = null) {
  let valueKey = (config ? config.valueKey : null) || "value";
  let labelKey = (config ? config.labelKey : null) || "label";

  return {
    /**
     * 获取单个配置项
     * @param {Any} value
     * @param {String} key
     * @returns {Object}
     */
    getItem(value, key = null) {
      for (let item of enums) {
        if (item[key || valueKey] == value) {
          return item;
        }
      }
    },

    /**
     * 获取配置项单列
     * @param {String} key
     * @returns {Array}
     */
    getColums(key) {
      return enums.map((item) => item[key]);
    },

    /**
     * 获取配置项单个值
     * @param {String} column
     * @param {String} key
     * @param {Any} value
     * @returns {Any}
     */
    getColum(column, key, value) {
      let item = this.getItem(value, key);
      if (item) {
        return item[column];
      }
    },

    /**
     * 获取label列
     * @returns {Array}
     */
    getLabels() {
      return this.getColums(labelKey);
    },

    /**
     * 获取value列
     * @returns {Array}
     */
    getValues() {
      return this.getColums(valueKey);
    },

    /**
     * 获取label
     * @param {Any} value 
     * @param {String} key 
     * @returns {Any}
     */
    getLabel(value, key = null) {
      return this.getColum(labelKey, key || valueKey, value);
    },

    /**
     * 获取value
     * @param {Any} value 
     * @param {String} key 
     * @returns {Any}
     */
    getValue(value, key = null) {
      return this.getColum(valueKey, key || labelKey, value);
    },
  };
}
