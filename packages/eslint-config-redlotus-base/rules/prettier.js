module.exports = {
  plugins: ["prettier"],
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "es5",
        arrowParens: "avoid",
        printWidth: 100,
        endOfLine: "auto",
      },
    ],
  },
};
