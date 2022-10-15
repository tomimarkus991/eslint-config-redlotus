module.exports = {
  extends: [
    "./rules/base",
    "./rules/best-practices",
    "./rules/errors",
    "./rules/es",
    "./rules/imports",
    "./rules/node",
    "./rules/variables",
    "./rules/prettier",
  ].map(require.resolve),
};
