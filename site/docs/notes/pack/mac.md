---
layout: doc
---

# Mac 相关配置笔记

## 管理多个`ruby`版本
- 安装 `rvm`
  ```bash
  curl -L https://get.rvm.io | bash -s stable
  source ~/.rvm/scripts/rvm
  rvm docs generate-ri
  ```
- 查看 `ruby` 发布的版本: `rvm list known`
- 查看已安装 `ruby` 版本: `rvm list`
- 切换指定版本 `ruby`版本: 
  - `rvm use 2.6.10` 切换到 2.6.10
  - `rvm use 2.6.10 --default` 切换到2.6.10并设置为默认项
- 查看当前 `ruby`版本：`ruby -v`

- 安装指定 `ruby`: `rvm install 2.6.10`
  > 若出现 `Error running '__rvm_make -j8'` 类似这种错误，则是`openssl` 的问题。安装 `openssl`

- 安装 `openssl`
  ```bash
  brew install openssl@1.1
  echo 'export PATH="/opt/homebrew/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc
  echo 'export LDFLAGS="-L/opt/homebrew/opt/openssl@1.1/lib"' >> ~/.zshrc
  echo 'export CPPFLAGS="-I/opt/homebrew/opt/openssl@1.1/include"' >> ~/.zshrc
  echo 'export PKG_CONFIG_PATH="/opt/homebrew/opt/openssl@1.1/lib/pkgconfig"' >> ~/.
  ```

## `cocoapods` 管理
> `cocoapods`通过 `gem`安装。
>
> 若在使用`pod`命令出现`'find_spec_for_exe': can't find gem cocoapods (>= 0.a) with executable pod (Gem::GemNotFoundException)`这种错误，则是`cocoapods`未安装，或者路径不对(我这里是`brew`里面有该库，`brew uninstall cocoapods`)，建议卸载。
>
> 若安装中遇到`drb`或者`activesupport`错误，按照提示安装即可。比如 `gem install drb -v 2.0.6` `gem install activesupport -v 6.1.7.7` 

- 查看`gem`版本： `gem -v`
- 查看已安装`cocoapods`:  `gem list cocoapods`
- 安装指定版本`cocoapods`:  `gem install cocoapods -v 1.14.3`
- `gem` 清除： `gem cleanup`
- `gem`源:
  ```bash
  #查看源
  gem source -l
  #移除默认源
  gem sources --remove https://rubygems.org/
  #换成可用源
  gem sources --add https://gems.ruby-china.com/
  #再查看更换源是否成功
  gem sources -l
  ```
- 查看版本：`pod --version`
- 使用指定版本： `pod _1.14.3_ install`

- `cocoapods` 卸载
  ```bash
  gem uninstall cocoapods
  gem uninstall cocoapods-core
  gem uninstall cocoapods-deintegrate
  gem uninstall cocoapods-downloader
  gem uninstall cocoapods-plugins
  gem uninstall cocoapods-search
  gem uninstall cocoapods-trunk
  gem uninstall cocoapods-try
  ```

## `bundle`
> `RN`工程，可通过 `bundle` 安装 `Gemfile`中的配置。`bundle install` 或 `bundle update`
- 升级： `gem update bundle`


## `fastlane`
- 安装`fastlane`: `gem install fastlane -NV`
- 查看版本： `fastlane --version`
- 初始化，将生成的文件移到RN根目录即可。
  ```bash
  cd ios
  fastlane init
  fastlane add_plugin pgyer
  ```