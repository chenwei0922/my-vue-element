import path from 'node:path';
import fs from 'fs';
import cp from 'node:child_process';

const _dirname = path.dirname(__filename);
const projRoot = path.resolve(_dirname, "../../../");
const buildOutput = path.resolve(projRoot, "./dist");
const qyOutput = path.resolve(buildOutput, "./chenwei02");
const pkgRoot = path.resolve(projRoot, "./packages");
const compRoot = path.resolve(pkgRoot, "./components");
const themeRoot = path.resolve(pkgRoot, "./theme");
const themeDistPath = path.resolve(themeRoot, "./dist");

const stayFiles = ["package.json", "README.md"];
const delPath = async (path$1) => {
  let files = [];
  if (fs.existsSync(path$1)) {
    files = fs.readdirSync(path$1);
    files.forEach(async (file) => {
      const curPath = path.resolve(path$1, file);
      if (fs.statSync(curPath).isDirectory()) {
        if (file != "node_modules") {
          await delPath(curPath);
        }
      } else {
        if (!stayFiles.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });
    if (path$1 != `${pkgRoot}/chenwei02`) {
      fs.rmdirSync(path$1);
    }
  }
};

const run = async (command, path) => {
  const [cmd, ...args] = command.split(" ");
  return new Promise((resolve) => {
    const app = cp.spawn(cmd, args, {
      cwd: path,
      stdio: "inherit",
      shell: true
    });
    app.on("close", resolve);
  });
};

export { buildOutput, compRoot, delPath, pkgRoot, projRoot, qyOutput, run, themeDistPath, themeRoot };
