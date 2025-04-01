import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
  
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
        '^src/(.*)$': '<rootDir>/src/$1', 
    },
};

export default config;
