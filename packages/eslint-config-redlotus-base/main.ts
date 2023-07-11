import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
// @ts-ignore
import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";

export * from "eslint";
export * from "prettier";
export * from "eslint-import-resolver-typescript";
export * from "eslint-plugin-jest-dom";
export * from "eslint-plugin-jsx-a11y";
export * from "eslint-plugin-testing-library";

export {eslintConfigPrettier,eslintPluginImport,eslintPluginPrettier,typescriptEslintParser,typescriptEslintPlugin};

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
    // @ts-ignore
  ].map(require.resolve),
};

