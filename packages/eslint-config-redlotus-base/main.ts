import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";

export * from "eslint";
export * from "prettier";
export * from "@typescript-eslint/eslint-plugin";
export * from "@typescript-eslint/parser";
export * from "eslint-import-resolver-typescript";
export * from "eslint-plugin-jest-dom";
export * from "eslint-plugin-jsx-a11y";
export * from "eslint-plugin-testing-library";

export {eslintConfigPrettier,eslintPluginImport,eslintPluginPrettier};

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

