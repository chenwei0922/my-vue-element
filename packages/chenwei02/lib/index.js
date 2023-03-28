"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const index$2 = require("./src/index.js");
const index$1 = require("./src/QVButton/index.js");
const index = {
  install: (app) => {
    console.log("222", index$2);
    for (const c in index$2) {
      app.use(index$2[c]);
    }
  }
};
exports.QVButton = index$1.QVButton;
exports.default = index;
