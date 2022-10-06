module.exports = {
  extends: ["eslint-config-redlotus-base", "./rules/react"].map(require.resolve),
  rules: {},
};
