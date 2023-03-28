/** @type {import('ts-jest').JestConfigWithTsJest} */
const esModules = ['i18next'].join('|');

const config = {
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.[tj]sx?$': [
      "ts-jest",
      { useESM: true }
    ]
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  modulePaths: ["node_modules", "<rootDir>/src", "src"],
};

export default config;
