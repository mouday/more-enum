// 可以与接口返回方约定数字、字符串
// 枚举值，用于逻辑判断
// 常量使用pascal命名更易读，灵感来自golang
export const statusEnum = {
  // 待支付
  WaitPay: 0,
  // 已完成
  Success: 1,
  // 已取消
  Cancel: 2,
};

// 枚举值配置，用于属性扩展
export const statusEnumConfig = [
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
