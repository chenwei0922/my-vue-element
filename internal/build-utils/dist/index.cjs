'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const path = require('node:path');
const fs = require('fs');
const cp = require('node:child_process');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

const path__default = /*#__PURE__*/_interopDefaultLegacy(path);
const fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
const cp__default = /*#__PURE__*/_interopDefaultLegacy(cp);

const _dirname = path__default.dirname(__filename);
const projRoot = path__default.resolve(_dirname, "../../../");
const buildOutput = path__default.resolve(projRoot, "./dist");
const qyOutput = path__default.resolve(buildOutput, "./chenwei02");
const pkgRoot = path__default.resolve(projRoot, "./packages");
const compRoot = path__default.resolve(pkgRoot, "./components");
const themeRoot = path__default.resolve(pkgRoot, "./theme");
const themeDistPath = path__default.resolve(themeRoot, "./dist");

const stayFiles = ["package.json", "README.md"];
const delPath = async (path) => {
  let files = [];
  if (fs__default.existsSync(path)) {
    files = fs__default.readdirSync(path);
    files.forEach(async (file) => {
      const curPath = path__default.resolve(path, file);
      if (fs__default.statSync(curPath).isDirectory()) {
        if (file != "node_modules") {
          await delPath(curPath);
        }
      } else {
        if (!stayFiles.includes(file)) {
          fs__default.unlinkSync(curPath);
        }
      }
    });
    if (path != `${pkgRoot}/chenwei02`) {
      fs__default.rmdirSync(path);
    }
  }
};

const run = async (command, path) => {
  const [cmd, ...args] = command.split(" ");
  return new Promise((resolve) => {
    const app = cp__default.spawn(cmd, args, {
      cwd: path,
      stdio: "inherit",
      shell: true
    });
    app.on("close", resolve);
  });
};

exports.buildOutput = buildOutput;
exports.compRoot = compRoot;
exports.delPath = delPath;
exports.pkgRoot = pkgRoot;
exports.projRoot = projRoot;
exports.qyOutput = qyOutput;
exports.run = run;
exports.themeDistPath = themeDistPath;
exports.themeRoot = themeRoot;
