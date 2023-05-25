# package.json
`engines` 用于指定项目运行的`node`、`npm`、`pnpm`等版本，目的减少版本差异产生的开发问题
`private` 安全性设置，防止被当作包发布
`name` 项目的名称，也是将来发布包的名字
`type:module` 使用es6语法
`main` 指定将来发布包的入口
`module` 若组件库环境支持esmodule，则入口文件变成这个字段
`files` 发布到npm上的文件目录
`sideEffects` 忽略tree shaking带来的副作用。比如打包后的代码包含`import "./xxx.css"`
`typings` 声明文件入口

//限制使用包管理器pnpm
"preinstall": "npx -y only-allow pnpm"
# pnpm
`pnpm add vue --save-peer -w`


# monorepo单仓多项目


# Vite
1. `@vitejs/plugin-vue` 会默认加载`package.json`所在目录下的 `index.html`

## 代码格式校验
`@typescript-eslint/eslint-plugin`
`@typescript-eslint/parser`
`eslint`
`eslint-plugin-vue`
`eslint-plugin-prettier`
`eslint-config-prettier`
`prettier`
`eslint-define-config`
`vue-eslint-parser`

`eslint-plugin-import`
`eslint-plugin-jsonc`
`eslint-plugin-markdown`
`eslint-plugin-unicorn`

<!-- `eslint-define-config` -->
`jsonc-eslint-parser`
`yaml-eslint-parser`
<!-- `vue-eslint-parser` -->

`stylelint-config-prettier`
`stylelint-prettier`

# 打包
`gulp` `@types/gulp` `gulp-sass` `@types/gulp-sass` `gulp-autoprefixer` `@types/gulp-autoprefixer`

@types/gulp-clean-css: 压缩css
gulp-clean-css

@types/gulp-rename gulp-rename : 重命名

gulp-concat: 合并


unplugin-vue-components
unplugin-vue-macros


Git global setup
git config --global user.name "陈微（Chen Wei）(chenwei02)"
git config --global user.email "chenwei02@dreamxr.com"

Create a new repository
git clone ssh://git@gitlab.qiyi.domain:10022/chenwei02/my-vue-demo.git
cd my-vue-demo
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Existing folder
cd existing_folder
git init
git remote add origin ssh://git@gitlab.qiyi.domain:10022/chenwei02/my-vue-demo.git
git add .
git commit -m "Initial commit"
git push -u origin master

Existing Git repository
cd existing_repo
git remote add origin ssh://git@gitlab.qiyi.domain:10022/chenwei02/my-vue-demo.git
git push -u origin --all
git push -u origin --tags