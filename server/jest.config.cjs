/** @type {import("jest").Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["<rootDir>/server/src/tests/setupEnv.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json"
    }
  },

  moduleNameMapper: {
    "^(.*)\\.js$": "$1"
  },

  verbose: true,
};
