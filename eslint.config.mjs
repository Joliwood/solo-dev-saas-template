import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
// import pluginReact from 'eslint-plugin-react';

export default defineConfig([
  tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
  {
    ignores: [
      './.types',
      '.next',
      '**/__generated__',
      '**/__generated_schemas__',
      '**/.next',
      '**/.next/**/*',
      '**/dev/*',
      '**/dist/*',
      '**/tests/*',
      'node_modules',
      'tsconfig.json',
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    rules: {
      quotes: [2, 'single'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      // 'react/jsx-filename-extension': [
      //   1,
      //   { extensions: ['.js', '.jsx', 'ts', '.tsx'] },
      // ],
      'no-console': 'off',
      'import/prefer-default-export': 'off',
      'react/no-unescaped-entities': 0,
      'no-underscore-dangle': 'off',
      // 'react/function-component-definition': 'off',
      // TODO - Use the perfectionist plugin
      // "import/order": [
      //   "error",
      //   {
      //     groups: ["builtin", "external", "parent", "sibling", "index"],
      //     "newlines-between": "always-and-inside-groups",
      //   },
      // ],
      'arrow-body-style': 'off',
      'react/no-array-index-key': 'off',
    },
  },
]);
