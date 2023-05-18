const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  // 是否开启eslint
  root: true,
  // 配置编译器宏环境
  env: {
    // 浏览器环境中全局变量
    browser: true,
    // nodejs全局变量
    node: true,
    es6: true,
    'vue/setup-compiler-macros': true
  },
  globals: {
    defineOptions: 'readonly'
  },
  // 解析器
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 解析器配置
    // 解析器
    parser: '@typescript-eslint/parser',
    // es版本
    ecmaVersion: 'latest',
    // 默认为script
    sourceType: 'module',
    // 支持ReactJSX语法
    // jsxPragma: 'React',
    // 表示你想使用的额外的语言特性
    ecmaFeatures: {
      jsx: true // 启用JSX
    }
  },

  // 通用规则集
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    // 1.接入prettier的规则
    'prettier',
    // 放在最后，因为extends中引入的规则会覆盖前面的
    'plugin:prettier/recommended'
  ],
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  // 规则设置
  rules: {
    // prettier
    // 'prettier/prettier': 'error',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     // semi: false,
    //     // trailingComma: 'none',
    //     // tabWidth: 2,
    //     // bracketSameLine: false,
    //     // 行尾是否使用分号，默认true
    //     semi: false,
    //     // 默认2
    //     tabWidth: 2,
    //     // 默认false, 是否使用tab缩进
    //     useTabs: false,
    //     // 字符串是否使用单引号, 默认false
    //     singleQuote: true,
    //     // 一行的字符数，如果超过会进行换行，默认80
    //     printWidth: 120,
    //     // //是否使用尾逗号
    //     trailingComma: 'none',
    //     // 对象大括号直接是否有空格，默认为true{ 'a' : 1 }
    //     bracketSpacing: true,
    //     // 多行文本,html dom标签右>放在最后一行末尾, 默认false
    //     bracketSameLine: false,
    //     // 箭头函数，单个参数是否带小括号 avoid|always(总带括号)
    //     arrowParens: 'avoid'
    //   }
    // ],
    'prettier/prettier': ['error', { printWidth: 120 }],

    // js/ts
    camelcase: ['error', { properties: 'never' }],
    'no-console': 'off',
    'no-debugger': 'warn',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-return-await': 'error',
    'no-var': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: true }],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
    'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // ts
    // 需要导出函数和类的公共类方法的显示返回和参数类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 禁止使用该any类型
    '@typescript-eslint/no-explicit-any': 'off',
    // 不允许使用后缀运算符的非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 不允许使用require语句
    '@typescript-eslint/no-var-requires': 'off',
    // 禁止空函数
    '@typescript-eslint/no-empty-function': 'off',
    // 在定义之前禁止使用变量
    // '@typescript-eslint/no-use-before-define': 'off',
    // 禁止ts使用评论或在指令后要求描述
    '@typescript-eslint/ban-ts-comment': 'off',
    // 禁止使用特定类型
    // '@typescript-eslint/ban-types': 'off',
    // 定义未使用
    '@typescript-eslint/no-unused-vars': 'off',

    // vue
    // 为自定义事件名称强制使用特定大小写
    // 'vue/custom-event-name-casing': 'off',
    // 强制执行属性顺序
    // 'vue/attributes-order': 'off',
    // 强制每个组件都应该在自己的文件中
    // 'vue/one-component-per-file': 'off'
    // 在标签的右括号之前要求或禁止换行
    // 'vue/html-closing-bracket-newline': 'off',
    // 在多行元素的内容之前和之后需要换行符
    'vue/multiline-html-element-content-newline': 'off',
    // 在单行元素的内容之前和之后需要换行符
    'vue/singleline-html-element-content-newline': 'off',
    // 对模板中的自定义组件强制执行属性命令样式
    // 'vue/attribute-hyphenation': 'off',
    // 需要props的默认值
    'vue/require-default-prop': 'off',
    // 在template中强制一致缩进
    // 'vue/html-indent': ['error', 2],
    // 强制每行属性的最大数量
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 10 },
        multiline: { max: 1 }
      }
    ],
    // 是否开启组件命令规则校验
    'vue/multi-word-component-names': 'off',
    // 执行自闭和的风格
    // normal:never => <div></div> good.
    // normal:always => <div /> good
    'vue/html-self-closing': [
      'error',
      {
        html: { void: 'always', normal: 'always', component: 'always' },
        svg: 'always',
        math: 'always'
      }
    ],
    // 关闭 v-html 校验
    'vue/no-v-html': 'off',
    'vue/first-attribute-linebreak': [
      'off',
      {
        singleline: 'ignore',
        multiline: 'below'
      }
    ],

    // js/ts
    // 行尾不使用分号
    // semi: ['error', 'never'],
    // 定义未使用
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    // 文档末尾要求空白行
    'eol-last': 'error',
    // '//'后面要求空格
    'spaced-comment': ['error', 'always'],
    // 要求getter/setter 成对出现
    'accessor-pairs': 'error'
  }

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
