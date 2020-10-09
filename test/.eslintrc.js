module.exports = {
  extends: [
    '../.eslintrc.js',
  ],
  rules: {
    "global-require": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-implicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/ban-ts-comment": "off"
  },
  env: {
    jest: true,
    node: true
  }
};