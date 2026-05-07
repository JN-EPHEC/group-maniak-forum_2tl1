/** @type {import("jest").Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

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
