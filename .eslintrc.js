const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  //是否开启eslint
  root: true,
  //配置编译器宏环境
  env: {
    //浏览器环境中全局变量
    browser: true,
    //nodejs全局变量
    node: true,
    es6: true,
  },
  //解析器
  parser: 'vue-eslint-parser',
  parserOptions: {
    //解析器配置
    //解析器
    parser: '@typescript-eslint/parser',
    //es版本
    ecmaVersion: 'latest',
    //默认为script
    sourceType: 'module',
    //支持ReactJSX语法
    // jsxPragma: 'React',
    //表示你想使用的额外的语言特性
    ecmaFeatures: {
      jsx: true, //启用JSX
    },
  },

  plugins: ['vue', '@typescript-eslint', 'prettier'],
  //通用规则集
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    //1.接入prettier的规则
    'prettier',
    //放在最后，因为extends中引入的规则会覆盖前面的
    'plugin:prettier/recommended',
  ],
  //规则设置
  rules: {
    // prettier
    'prettier/prettier': 'error',

    //ts
    //需要导出函数和类的公共类方法的显示返回和参数类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    //禁止使用该any类型
    '@typescript-eslint/no-explicit-any': 'off',
    //不允许使用后缀运算符的非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    //不允许使用require语句
    // '@typescript-eslint/no-var-requires': 'off',
    // 禁止空函数
    // '@typescript-eslint/no-empty-function': 'off',
    // 在定义之前禁止使用变量
    // '@typescript-eslint/no-use-before-define': 'off',
    // 禁止ts使用评论或在指令后要求描述
    '@typescript-eslint/ban-ts-comment': 'off',
    // 禁止使用特定类型
    // '@typescript-eslint/ban-types': 'off',

    // vue
    // 为自定义事件名称强制使用特定大小写
    // 'vue/custom-event-name-casing': 'off',
    //强制执行属性顺序
    // 'vue/attributes-order': 'off',
    //强制每个组件都应该在自己的文件中
    // 'vue/one-component-per-file': 'off'
    //在标签的右括号之前要求或禁止换行
    // 'vue/html-closing-bracket-newline': 'off',
    //在多行元素的内容之前和之后需要换行符
    // 'vue/multiline-html-element-content-newline': 'off',
    //在单行元素的内容之前和之后需要换行符
    // 'vue/singleline-html-element-content-newline': 'off',
    // 对模板中的自定义组件强制执行属性命令样式
    // 'vue/attribute-hyphenation': 'off',
    // 需要props的默认值
    'vue/require-default-prop': 'off',
    //在template中强制一致缩进
    // 'vue/html-indent': ['error', 2],
    //执行自闭和的风格
    // 'vue/html-self-closing': 'off',
    // 强制每行属性的最大数量
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 10 },
        multiline: { max: 1 },
      },
    ],
    //是否开启组件命令规则校验
    'vue/multi-word-component-names': 'off',
    //行尾是否加分号
    semi: ['error', 'never'],
  },

  // overrides: [
  //     //若要开启组件命令规则校验，建议选这种方式
  //     {
  //         files: ['*.vue'],
  //         rules: {
  //             'vue/multi-word-component-names': 'off'
  //         }
  //     }
  // ]
})
