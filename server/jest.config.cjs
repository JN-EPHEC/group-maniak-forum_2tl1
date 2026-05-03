const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  verbose: true,
  transform: {
    ...tsJestTransformCfg,
  },
    collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/tests/**",
    "!src/server.ts",
    "!src/services/**",
    "!src/config/**",
    "!src/routes/**",
    "!src/controllers/**",
    "!src/data/**",
    "!src/models/**",
    "!src/relations/**",
    "!src/types/**",
    "!src/seeders/**",
    "!src/**/index.ts",
  ],
};
