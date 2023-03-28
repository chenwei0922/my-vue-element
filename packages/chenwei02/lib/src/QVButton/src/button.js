"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const buttonTypes = [
  "default",
  "primary",
  "blue",
  "gray",
  "weak",
  "icon",
  "success",
  "info",
  "warn",
  "danger"
];
const sizeEnum = ["default", "small", "large"];
const buttonProps = {
  /**
   * 按钮类型
   */
  type: { type: String, default: "default", values: buttonTypes },
  /**
   * 按钮大小
   */
  size: { type: String, default: "default", values: sizeEnum },
  /**
   * 是否纯文本
   */
  text: Boolean,
  /**
   * 是否对话框按钮
   */
  dialog: Boolean,
  /**
   * 是否禁用
   */
  disabled: Boolean
};
exports.buttonProps = buttonProps;
exports.buttonTypes = buttonTypes;
exports.sizeEnum = sizeEnum;
