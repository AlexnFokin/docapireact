import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import buildCssLoaders from '../build/loaders/buildCssLoaders';
import { RuleSetRule } from 'webpack';
import buildSvgLoader from '../build/loaders/buildSvgLoader';

const config: StorybookConfig = {
    "stories": [
        "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions"
    ],
    "framework": {
        "name": "@storybook/react-webpack5",
        "options": {}
    },
    webpackFinal: async (config) => {
        if (!config.resolve) return config;
        
        config.resolve.modules = [
            path.resolve(__dirname, '..', '..', 'src'),
            'node_modules',
        ];
    
        config.resolve.alias = {
            ...config.resolve.alias,
            'shared': path.resolve(__dirname, '..', '..', 'src', 'shared'),
        };
         
        config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return {...rule, exclude: /\.svg$/i}
            }
            return rule;
        })
        
        config.module?.rules?.push(buildSvgLoader())
        config.module.rules.push(buildCssLoaders(true))
        
        return config;
    },
};
export default config;