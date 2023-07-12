module.exports = {
  plugins: ["prettier"],
  extends: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        tabWidth: 2,
        singleQuote: false,
        // https://prettier.io/blog/2023/07/05/3.0.0.html#javascript
        trailingComma: "all",
        arrowParens: "avoid",
        printWidth: 100,
        endOfLine: "auto",
      },
      {
        usePrettierrc: false,
        fileInfoOptions: {
          withNodeModules: true
        }
      },
    ],
  },
};
