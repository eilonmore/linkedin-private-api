module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'max-classes-per-file': 'off',
    '@typescript-eslint/indent': 'off',
    'import/no-cycle': 'off',
  },
};
