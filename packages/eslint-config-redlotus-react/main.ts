module.exports = {
  // @ts-ignore
  extends: ["eslint-config-redlotus-base", "./rules/react"].map(require.resolve),
  rules: {},
};

export * from "eslint-config-redlotus-base";
export * from "eslint-plugin-react";
export * from "eslint-plugin-react-hooks";