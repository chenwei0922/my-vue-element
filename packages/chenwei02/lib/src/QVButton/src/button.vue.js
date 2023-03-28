"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/index.css");
const button = require("./button.js");
const __default__ = vue.defineComponent({ name: "qy-button" });
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: button.buttonProps,
  setup(__props) {
    const props = __props;
    const buttonClass = vue.computed(() => {
      const classes = [props.type, `qy-button--${props.size}`];
      if (props.text) {
        classes.push("text");
      }
      if (props.dialog) {
        classes.push("dialog");
      }
      if (props.disabled) {
        classes.push("disabled");
      }
      return classes;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(["qy-button", vue.unref(buttonClass)])
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
exports.default = _sfc_main;
