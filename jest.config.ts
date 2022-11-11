import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  moduleNameMapper:{
    "uuid": require.resolve("uuid"),
  },
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],

};

export default config;

//TODO: UUID ERROR