module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 'off',
    'indent': 'off',
    "linebreak-style": ['off', "error", "windows"],
    "no-unused-vars": 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
