import libram from "eslint-plugin-libram";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {},
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**"],
    plugins: {
      tseslint: tseslint,
      libram: libram,
    },
    rules: {
      "block-scoped-var": "error",
      "eol-last": "error",
      "no-trailing-spaces": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
        },
      ],
      "no-constant-binary-expression": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "libram/verify-constants": "error",
    },
  },
];
