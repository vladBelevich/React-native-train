import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactNativePlugin from "eslint-plugin-react-native";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: [
            "node_modules/",
            ".expo/",
            "dist/",
            "build/",
            "android/",
            "ios/",
            "scripts/",
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2024,
            },
        },
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "react-native": reactNativePlugin,
            import: importPlugin,
        },
        settings: {
            react: { version: "detect" },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/display-name": "off",

            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            "react-native/no-unused-styles": "warn",
            "react-native/no-inline-styles": "warn",
            "react-native/no-color-literals": "warn",
            'prettier/prettier': 'error',
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/consistent-type-imports": "error",

            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                    ],
                    "newlines-between": "always",
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],
        },
    }
);