module.exports = {
  extends: [
    "./rules/base",
    "./rules/best-practices",
    "./rules/errors",
    "./rules/es",
    "./rules/imports",
    "./rules/node",
    "./rules/prettier",
    "./rules/variables",
  ].map(require.resolve),
};
