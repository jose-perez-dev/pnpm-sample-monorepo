module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "indent": ["error", 2],
      "comma-dangle": ["error", "always-multiline"],
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
  };
  