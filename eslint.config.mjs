import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default [
 {
  ignores: [
   "src/screens/app/asopay/**/*",
   "node_modules/**/*",
   "dist/**/*",
   ".expo/**/*",
   "*.min.js",
   "*.bundle.js",
   "babel.config.js",
   "metro.config.js",
   "tailwind.config.js",
  ],
 },
 js.configs.recommended,
 {
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
   parser: tsparser,
   parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
     jsx: true,
    },
   },
   globals: {
    console: "readonly",
    FormData: "readonly",
    process: "readonly",
    setInterval: "readonly",
    clearInterval: "readonly",
    alert: "readonly",
   },
  },
  plugins: {
   "@typescript-eslint": tseslint,
   import: importPlugin,
  },
  rules: {
   ...tseslint.configs.recommended.rules,
   "import/order": [
    "warn",
    {
     groups: [
      "builtin", // fs, path, etc
      "external", // react, lodash
      "internal", // @src/*
      ["parent", "sibling", "index"],
     ],
     alphabetize: { order: "asc", caseInsensitive: true },
     "newlines-between": "always",
    },
   ],
  },
 },
];
