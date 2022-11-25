// 增强枚举对象
export function createEnumObject(enums, config = null) {
  let valueKey = (config ? config.valueKey : null) || "value";
  let labelKey = (config ? config.labelKey : null) || "label";

  return {
    getItem(value, key = null) {
      for (let item of enums) {
        if (item[key || valueKey] == value) {
          return item;
        }
      }
    },

    getColums(key) {
      return enums.map((item) => item[key]);
    },

    getColum(column, key, value) {
      let item = this.getItem(value, key);
      if (item) {
        return item[column];
      }
    },

    getLabels() {
      return this.getColums(labelKey);
    },

    getValues() {
      return this.getColums(valueKey);
    },

    getLabel(value, key = null) {
      return this.getColum(labelKey, key || valueKey, value);
    },

    getValue(value, key = null) {
      return this.getColum(valueKey, key || labelKey, value);
    },
  };
}
