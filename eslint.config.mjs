import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_'
        }
      ],
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_'
        }
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            '../*',
            '../',
            '..',
            '@/apis/*/*',
            '@/configs/*/*',
            '@/components/*/*',
            '@/contexts/*/*',
            '@/factories/*/*',
            '@/features/*/*',
            '@/hooks/*/*',
            '@/layouts/*/*',
            '@/schemas/*/*',
            '@/types/*/*',
            '@/utils/*/**'
          ]
        }
      ],
      'linebreak-style': ['error', 'unix'],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object'
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off'
    }
  }
]

export default eslintConfig
