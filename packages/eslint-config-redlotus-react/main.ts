export * from "eslint-config-redlotus-base";
export * from "eslint-plugin-react";
export * from "eslint-plugin-react-hooks";
export * as sus from "eslint-plugin-tailwindcss";

module.exports = {
  // @ts-ignore
  extends: ["eslint-config-redlotus-base/dist/main", "./rules/react"].map(require.resolve),
};