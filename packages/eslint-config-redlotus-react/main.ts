export * from "eslint-config-redlotus-base";
export * from "eslint-plugin-react";
export * from "eslint-plugin-react-hooks";
export * from "eslint-plugin-tailwindcss";
export * from "eslint-plugin-prettier";
export * from "eslint-plugin-jsx-a11y";
export * from "eslint-plugin-testing-library";

module.exports = {
  // @ts-ignore
  extends: ["eslint-config-redlotus-base/dist/main", "./rules/react"].map(require.resolve),
};