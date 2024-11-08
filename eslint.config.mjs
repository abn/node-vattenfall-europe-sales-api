import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginJest from "eslint-plugin-jest";
import tsdoc from "eslint-plugin-tsdoc";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
    },
    { languageOptions: { sourceType: "commonjs", parser: tsParser } },
    { ignores: ["node_modules/*", "dist/*", "docs/*"] },
    {
        ignores: ["typedoc.config.mjs"],
        plugins: {
            tsdoc,
        },
        rules: { "tsdoc/syntax": "warn" },
    },
    ...tseslint.configs.recommended,
    eslintPluginPrettierRecommended,
    {
        files: ["tests/**"],
        ignores: ["tests/helpers/**"],
        ...eslintPluginJest.configs["flat/recommended"],
        rules: { ...eslintPluginJest.configs["flat/recommended"].rules, "jest/prefer-expect-assertions": "off" },
    },
];
