import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
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
      'import/no-named-as-default': 'off',
      // React Compiler rules added in eslint-config-next 16. This project doesn't
      // use the compiler, and the flagged patterns (refs shared via context /
      // passed to useInView) are intentional. Kept visible as warnings.
      'react-hooks/refs': 'warn',
      'react-hooks/set-state-in-effect': 'warn'
    }
  }
])

export default eslintConfig
