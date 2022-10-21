module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "react-hooks", "tailwindcss"],
  extends: [
    "plugin:jsx-a11y/recommended",
    "plugin:testing-library/react",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "components",
            group: "internal",
          },
          {
            pattern: "context",
            group: "internal",
          },
          {
            pattern: "hooks",
            group: "internal",
          },
          {
            pattern: "routes",
            group: "internal",
          },
          {
            pattern: "utils",
            group: "internal",
          },
          {
            pattern: "pages",
            group: "internal",
          },
          {
            pattern: "app-constants",
            group: "internal",
          },
          {
            pattern: "types",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/enforces-negative-arbitrary-values": "off",
    "tailwindcss/migration-from-tailwind-2": "off",
  },
};
