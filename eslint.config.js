/**
 * eslint config
 * @author Yimi by yimicat.com
 * @date 2024-02-25 20:21
 * @see typescript-eslint https://typescript-eslint.io/play
 */
import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'
import unocss from '@unocss/eslint-config/flat'

export default [
  unocss,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    }
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // ...tseslint.configs.strict,
  // ...tseslint.configs.stylistic,
  ...eslintPluginVue.configs['flat/essential'], //以及防止错误或意外行为的规则。base
  { ignores: ['node_modules', '.nuxt', 'public', 'dist', '.output', '.data', '.nitro'] },
  {
    plugins: {},
    rules: {
      // 要求使用 let 或 const 而不是 var
      'no-var': 'error',

      // 不允许多个空行，最多一个
      'no-multiple-empty-lines': ['warn', { max: 1 }],

      // 禁止空余的多行
      'no-unexpected-multiline': 'error',

      // 数组和对象键值对最后一个逗号，
      // never参数：结尾不能带末尾的逗号,
      // always参数：结尾必须带末尾的逗号，
      // always-multiline：多行结尾必须带逗号，单行结尾不能带逗号
      // only-multiline：多行结尾可以带逗号，单行结尾不能带逗号
      'comma-dangle': ['warn', 'never'],

      //要求组件名称始终为 “-” 链接的单词
      'vue/multi-word-component-names': 'off',

      // 禁止定义未使用的变量
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/ban-types': 'off',
      // 禁止使用 @ts-ignore
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      // 解决按需导入 nuxt 未定义的问题
      'no-undef': 'off'
    }
  }
]
