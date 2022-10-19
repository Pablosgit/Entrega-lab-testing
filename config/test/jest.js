module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  verbose: true,
  restoreMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/test/setup-after.ts'],
};
