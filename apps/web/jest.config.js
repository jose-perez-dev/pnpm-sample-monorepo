const baseConfig = require('../../configs/jest/jest.config.base');

module.exports = {
  ...baseConfig,
  clearMocks: true,
  transform: { ...baseConfig.transform },
  setupFiles: ['<rootDir>/configs/jest/tests.env.js'],
};
