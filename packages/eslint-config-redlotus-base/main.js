const eslint = require("eslint");
const prettier = require("prettier");
const eslintImportResolverTypescript = require("eslint-import-resolver-typescript");
const eslintPluginJsxA11y = require("eslint-plugin-jsx-a11y");
const eslintPluginTestingLibrary = require("eslint-plugin-testing-library");

const eslintConfigPrettier = require("eslint-config-prettier");
const eslintPluginImport = require("eslint-plugin-import");
const eslintPluginPrettier = require("eslint-plugin-prettier");
const typescriptEslintParser = require("@typescript-eslint/parser");
const typescriptEslintPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = {
  eslint,
  prettier,
  eslintImportResolverTypescript,
  eslintPluginJsxA11y,
  eslintPluginTestingLibrary,
  typescriptEslintParser,
  typescriptEslintPlugin,
  eslintConfigPrettier,
  eslintPluginImport,
  eslintPluginPrettier,
  config: {
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
  },
};
