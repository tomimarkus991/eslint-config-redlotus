// eslint-disable-next-line no-undef
module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true,
        "jest": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "settings": {
        "react": {
            "version": "detect"
        },
        "import/resolver": {
            "typescript": {}
        }
    },
    "plugins": [
        "react",
        "react-hooks",
        "import",
        "@typescript-eslint",
        "prettier"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jest-dom/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended"
    ],
    "rules": {
        "react/function-component-definition": [
            "error",
            {
                "namedComponents": "arrow-function",
                "unnamedComponents": "arrow-function"
            }
        ],
        "react/prop-types": "off",
        "import/order": [
            "error",
            {
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "object"
                ],
                "newlines-between": "always",
                "pathGroups": [],
                "pathGroupsExcludedImportTypes": [],
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                }
            }
        ],
        "import/default": "off",
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-types": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "prettier/prettier": [
            "error",
            {
                "semi": true,
                "tabWidth": 2,
                "singleQuote": false,
                "trailingComma": "es5",
                "arrowParens": "avoid",
                "printWidth": 100,
                "endOfLine": "auto"
            }
        ]
    }

}
