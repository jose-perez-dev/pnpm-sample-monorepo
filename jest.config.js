const baseConfig = require('./configs/jest/jest.config.base');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>'],
  projects: ['<rootDir>/apps/web/jest.config.js', '<rootDir>/packages/ui/jest.config.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.ts'],
  setupFiles: ['<rootDir>/config/jest/jest.env.js'],
};
