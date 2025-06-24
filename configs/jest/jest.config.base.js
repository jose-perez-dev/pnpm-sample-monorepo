module.exports = {
  verbose: true,
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  transform: {
    '^.+\\.(ts|tsx)$': [
      '@swc/jest',
      {
        sourceMaps: 'inline',
        inlineSourcesContent: true,
        jsc: {
          experimental: {
            plugins: [['swc_mut_cjs_exports', {}]],
          },
        },
      },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/../../configs/jest/jest.setup.ts'],
  setupFiles: ['<rootDir>/../../configs/jest/jest.env.js'],
  modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/dist/'],
  coveragePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/dist/',
    'node_modules',
    '__tests__',
    '__mocks__',
    'constants.ts',
    'constants',
    'types.ts',
    'types-env.d.ts',
  ],
  testPathIgnorePatterns: ['node_modules', '/__tests__/utils'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.stories.tsx'],
  coverageDirectory: '<rootDir>/coverage/',
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  moduleNameMapper: {
    '\\.(ico|eot|otf|ttf|woff|woff2|mp4)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.(jpg|jpeg|png|gif|webp|svg|css|less|scss)$': 'identity-obj-proxy',
    '^@bet-tracker/ui/(.*)$': '<rootDir>/../../packages/ui/src/$1',
    '^nanoid$': require.resolve('nanoid'),
    '^next/font/google$': '<rootDir>/__mocks__/mockNextLocalFont.ts',
    '^next/font/local$': '<rootDir>/__mocks__/mockNextLocalFont.ts',
  },
  reporters: [['jest-silent-reporter', { showMargin: true, showPaths: true }]],
};
