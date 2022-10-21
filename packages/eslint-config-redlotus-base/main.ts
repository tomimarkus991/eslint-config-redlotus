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
    // @ts-ignore
  ].map(require.resolve),
};


import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";

export {eslintConfigPrettier,eslintPluginImport};

export * from "@typescript-eslint/eslint-plugin";
export * from "@typescript-eslint/parser";
export * from "eslint";
export * from "eslint-import-resolver-typescript";
export * from "eslint-plugin-jest-dom";
export * from "eslint-plugin-jsx-a11y";
export * from "eslint-plugin-prettier";
export * from "eslint-plugin-testing-library";
export * from "eslint-plugin-tailwindcss";