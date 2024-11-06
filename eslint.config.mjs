import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginJest from "eslint-plugin-jest";

export default [
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    { ignores: ["node_modules/*", "dist/*", "docs/*"] },
    { languageOptions: { sourceType: "commonjs" } },
    ...tseslint.configs.recommended,
    eslintPluginPrettierRecommended,
    {
        files: ["tests/**"],
        ignores: ["tests/helpers/**"],
        ...eslintPluginJest.configs["flat/recommended"],
        rules: { ...eslintPluginJest.configs["flat/recommended"].rules, "jest/prefer-expect-assertions": "off" },
    },
];
