export * from "eslint-config-redlotus-base";
export * from "eslint-config-redlotus-react";
export * from "eslint-config-next";
export * from "eslint-plugin-react";
export * from "eslint-plugin-react-hooks";
export * from "eslint-plugin-tailwindcss";
export * from "eslint-plugin-prettier";
export * from "@testing-library/dom";

module.exports = {
  extends: [
    "eslint-config-redlotus-base/dist/main",
    // "eslint-config-redlotus-react/dist/main",
    "./rules/react",
    "./rules/next"
    // @ts-ignore
].map(require.resolve),
};