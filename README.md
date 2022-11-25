# more-enum

一个枚举增强扩展

安装

```
npm i more-enum
```

定义枚举值

```js
// 可以与接口返回方约定数字、字符串
// 枚举值，用于逻辑判断
// 常量使用pascal命名更易读，灵感来自golang
const statusEnum = {
  // 待支付
  WaitPay: 0,
  // 已完成
  Success: 1,
  // 已取消
  Cancel: 2,
};

// 枚举值配置，用于属性扩展
const statusEnumConfig = [
  {
    value: statusEnum.WaitPay,
    label: "待支付",
    color: "yellow",
    // 支付 取消支付
    actions: ["pay", "cancel"],
  },
  {
    value: statusEnum.Success,
    label: "已完成",
    color: "green",
    // 查看详情 退款
    actions: ["detail", "return"],
  },
  {
    value: statusEnum.Cancel,
    label: "已取消",
    color: "red",
    // 查看详情
    actions: ["detail"],
  },
];
```

增强枚举配置

```js
import { createEnumObject } from "more-enum";
// import { createEnumObject } from "./src/index.js";

// 枚举值对象，用于数值转换
const statusEnumObject = createEnumObject(statusEnumConfig);

```

使用

```js
// 通过 value获取配置项
console.log(statusEnumObject.getItem(1));
// {
//   value: 1,
//   label: '已完成',
//   color: 'green',
//   actions: [ 'detail', 'return' ]
// }

// 通过label获取value
console.log(statusEnumObject.getValue("已完成"));
// 1

// 没有对应的值返回undefined
console.log(statusEnumObject.getValue(1));
// undefined

// 通过value 获取 label
// 接口返回的真实数值，转换为显示值
console.log(statusEnumObject.getLabel(1));
// 已完成

// 通过指定key=color，获取label
console.log(statusEnumObject.getLabel('green', 'color'));
// 已完成

// 直接和接口返回的数值，做逻辑判断
let status = 1;
console.log(statusEnum.Success == status);
// true

```