module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:gridsome/recommended',
  ],
  plugins: [
    'gridsome',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      alias: [
        ['~', './src'],
      ],
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        vue: 'never',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
      },
    ],
  },
  overrides: [
    {
      files: [
        '*.vue',
      ],
      rules: {
        indent: 'off',
      },
    },
  ],
};
