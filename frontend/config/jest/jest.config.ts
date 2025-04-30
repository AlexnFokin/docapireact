import type { Config } from 'jest';
import path from 'path';

const config: Config = {
    preset: 'ts-jest',

    globals: {
        '__IS_DEV__': true,
        '__API__': ''
    },
  
    testEnvironment: 'jsdom',

    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: '<rootDir>/tsconfig.json', 
        }],
    },

    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    rootDir: '../../',

    testMatch: [
        '<rootDir>/src/**/*.{test,spec}.{ts,tsx}',
    ],

    coverageDirectory: 'coverage',

    coveragePathIgnorePatterns: ['/node_modules/'],

    clearMocks: true,

    collectCoverage: true,

    transformIgnorePatterns: [
        '/node_modules/',
    ],

    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '^src/(.*)$': '<rootDir>/src/$1', 
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '^entities/(.*)$': '<rootDir>/src/entities/$1',
    },
    modulePaths: [
        "<rootDir>src"
    ],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
};

export default config;
