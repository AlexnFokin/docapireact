import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";

export default defineConfig([
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            react: reactPlugin,
            "react-hooks": require("eslint-plugin-react-hooks"),
        },
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react/require-default-props": "off",
            "react/jsx-props-no-spreading": "warn",
            "react/function-component-definition": "off"
        }
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            "indent": ["error", 4, {
                "SwitchCase": 1, 
                "VariableDeclarator": 1, 
            }],
            "operator-linebreak": ["error", "before", { 
                "overrides": { 
                    "?": "ignore", 
                    ":": "ignore" 
                }
            }],
            "no-unused-vars": "warn",
            "no-shadow": "off",
            "import/extensions": "off",
            "import/no-extraneous-dependencies": "off",
            "no-underscore-dangle": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error" 
        },
        ignores: ["build/**/*"],
    }
]);