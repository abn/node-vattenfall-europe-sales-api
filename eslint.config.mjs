import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    { ignores: [".node_modules/*", "dist/*", "docs/*"] },
    { languageOptions: { sourceType: "commonjs" } },
    ...tseslint.configs.recommended,
    eslintPluginPrettierRecommended,
];
