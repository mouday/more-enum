import { createEnumObject } from "../src/index.js";
import { statusEnum, statusEnumConfig } from "./enums.js";

// 枚举值对象，用于数值转换
const statusEnumObject = createEnumObject(statusEnumConfig);

test('statusEnumObject.getValue("已完成")', () => {
  expect(statusEnumObject.getValue("已完成")).toBe(1);
});

test("statusEnumObject.getValue(1)", () => {
  expect(statusEnumObject.getValue(1)).toBe(undefined);
});

test("statusEnumObject.getLabel(1)", () => {
  expect(statusEnumObject.getLabel(1)).toBe("已完成");
});

test("statusEnumObject.getLabel('green', 'color')", () => {
  expect(statusEnumObject.getLabel("green", "color")).toBe("已完成");
});

test("statusEnumObject.getLabel('green', 'color')", () => {
  let status = 1;
  expect(statusEnum.Success == status).toBe(true);
});
