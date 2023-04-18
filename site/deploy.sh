#!/usr/bin/env sh

set -e

pnpm run docs:build
# https://juejin.cn/post/7035473521480302629
cd docs/.vitepress/dist

# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:chenwei0922/qy-element.git master:gh-pages

# git push -f origin master

cd -