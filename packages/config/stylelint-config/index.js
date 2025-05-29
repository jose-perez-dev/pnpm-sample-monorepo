module.exports = {
    extends: [
      "stylelint-config-standard",
      "stylelint-config-standard-scss",
      "stylelint-config-tailwindcss",
    ],
    plugins: ["stylelint-scss", "stylelint-order"],
    rules: {
      "declaration-no-important": true,
      "indentation": [2, {
        "baseIndentLevel": 2
      }],
      "order/order": [
        "custom-properties",
        "declarations",
        "rules",
        "at-rules",
      ],
      "no-empty-source": null,
      "string-quotes": "double",
      "indentation": 2,
      "color-hex-case": "lower",
      "color-hex-length": "short",
      "scss/dollar-variable-pattern": "^([a-z][a-z0-9]*)$",
      "scss/percent-placeholder-pattern": "^([a-z][a-z0-9]*)$",
      "scss/at-import-partial-extension-blacklist": ["scss"],
    }
  };
  