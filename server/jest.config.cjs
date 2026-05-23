/** @type {import("jest").Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.jest.json"
      }
    ]
  },

  setupFiles: ["<rootDir>/src/tests/setupEnv.ts"],

  moduleNameMapper: {
    "^(.*)\\.js$": "$1"
  },

  verbose: true,
};
