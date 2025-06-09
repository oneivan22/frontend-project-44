import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  stylistic.configs.recommended,
  { 
    files: ['**/*.{js,mjs,cjs}'], 
    plugins: { 
      '@stylistic': stylistic 
    },
    rules: {
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/arrow-parens': ['error', 'as-needed']
    }
  },
  { 
    files: ['**/*.{js,mjs,cjs}'], 
    languageOptions: { 
      globals: globals.node 
    } 
  }
])