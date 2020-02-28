module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageReporters: [
    "json",
    "lcov",
    "clover"
  ],
  coverageThreshold: {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  globals: {
    "NODE_ENV": "test",
    window: true,
    document: true,
  },
  moduleDirectories: [
    "node_modules",
    "src",
    "tests/mocks"
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "node"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/tests/$1',
  },
  setupFiles: ["<rootDir>/tests/setupTests.js"],
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.js"],
  testEnvironment: "node",
  testMatch: [
    "**/tests/**/*.test.js?(x)",
    "**/?(*.)+(spec|test).js?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "package.json",
    "package-lock.json"
  ],
  timers: "fake",
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  verbose: false,
};
