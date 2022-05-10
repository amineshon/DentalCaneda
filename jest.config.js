// jest.config.js
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/.storybook/'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx)$/': '<rootDir>/node_modules/babel-jest',
  //   '/^.+.(css|less|sass|scss)$': 'identity-obj-proxy',
  // },
};
