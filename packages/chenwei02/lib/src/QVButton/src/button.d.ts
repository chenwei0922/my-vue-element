export declare const buttonTypes: string[];
export declare const sizeEnum: string[];
export declare const buttonProps: {
    /**
     * 按钮类型
     */
    type: {
        type: StringConstructor;
        default: string;
        values: string[];
    };
    /**
     * 按钮大小
     */
    size: {
        type: StringConstructor;
        default: string;
        values: string[];
    };
    /**
     * 是否纯文本
     */
    text: BooleanConstructor;
    /**
     * 是否对话框按钮
     */
    dialog: BooleanConstructor;
    /**
     * 是否禁用
     */
    disabled: BooleanConstructor;
};
