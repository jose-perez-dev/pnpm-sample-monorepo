const baseConfig = require('./configs/jest/jest.config.base');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>'],
  projects: ['<rootDir>/apps/web/jest.config.js', '<rootDir>/packages/ui/jest.config.js'],
  setupFilesAfterEnv: ['<rootDir>/configs/jest/jest.setup.js'],
  setupFiles: ['<rootDir>/configs/jest/jest.env.js'],
};
