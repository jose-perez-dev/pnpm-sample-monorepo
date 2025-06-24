module.exports = {
  extends: ['@pnpm-sample-monorepo/eslint-config', 'next/core-web-vitals'],
  rules: {
    "@next/next/no-html-link-for-pages": 'off',
  }
};
