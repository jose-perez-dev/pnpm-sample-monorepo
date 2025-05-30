module.exports = {
    extends: [
      "stylelint-config-standard",
      "stylelint-config-standard-scss",
      "stylelint-config-tailwindcss",
    ],
    plugins: [
      "stylelint-scss", 
      "stylelint-order",
    ],
    rules: {
      'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['theme'] }],
      "color-hex-length": "short",
      "declaration-block-no-duplicate-properties": null,
      "declaration-no-important": true,
      "no-empty-source": null,
      "order/order": ["custom-properties", "declarations", "rules", "at-rules"],
      "scss/at-import-partial-extension-blacklist": ["scss"],
      "scss/dollar-variable-pattern": "^([a-z][a-z0-9]*)$",
      "scss/percent-placeholder-pattern": "^([a-z][a-z0-9]*)$",
      "selector-anb-no-unmatchable": null,
      "selector-anb-no-unmatchable": null,
    }
  };
  