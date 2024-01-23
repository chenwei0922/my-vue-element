---
layout: doc
---

# PNPM
[PNPM API](https://pnpm.io/cli/rebuild)


## 安装
`npm install -g pnpm` | `brew install pnpm`
> 如果您不使用独立脚本来安装 `pnpm`，那么您需要在您的系统上安装 `Node.js`（至少 `v14`）。


## 常用命令

- `-C <path>, --dir <path>` 在指定`path`中启动pnpm
- `-w, --workspace-root` 在根目录中启动`pnpm`
-  `-F <package_selector>, --filter <package_selector>` 选择一个软件包
- `--filter=!<package_selector>` 排除某个包
- `-D` 保存到`devDependencies`
- `--save-peer` 依赖保存到`peerDependencies`


- `pnpm init` 初始化
- `pnpm install` 安装
- `pnpm add <pkg>` 安装库
- `pnpm add <pkg> -w` 根目录安装依赖
- `pnpm add <pkg> -r` 所有子项目安装依赖
- `pnpm add <pkg> -r --filter <package_name>` 指定子项目安装依赖