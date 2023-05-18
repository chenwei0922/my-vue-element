export const inputProps = {
  /**
   * 绑定的值
   */
  modelValue: { type: [String, Number, Object], default: '' },
  /**
   * 输入框类型
   */
  type: { type: String, default: 'text' },
  /**
   * 占位字符
   */
  placeholder: { type: String, default: null },
  /**
   * 是否禁用
   */
  disabled: { type: Boolean, default: false },
  /**
   * 是否显示查看密码图标
   */
  showPassword: { type: Boolean, default: false },
  /**
   * 是否显示清除按钮
   */
  clearable: { type: Boolean, default: false },
  /**
   * 输入框后缀图标
   */
  suffixIcon: { type: String, default: null },
  /**
   * 输入框前缀图标
   */
  prefixIcon: { type: String, default: null },
  /**
   * 是否只读
   */
  readonly: { type: Boolean, default: false },
  /**
   * 是否显示统计字数
   */
  showWordLimit: { type: Boolean, default: false },
  /**
   * 最大输入长度
   */
  maxlength: { type: [String, Number], default: null },
  /**
   * 最小输入长度
   */
  minlength: { type: [Number, String], default: null },
  /**
   * 是否触发表单验证
   */
  validateEvent: { type: Boolean, default: true },
  /**
   * 是否自动调整大小
   */
  autosize: { type: [Boolean, Object], default: false },
  /**
   * 输入框行数
   */
  rows: { type: [Number, String], default: null }
}
export type InputProps = typeof inputProps
