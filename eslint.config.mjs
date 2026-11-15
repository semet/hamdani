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
            {
              group: ['../*', '../', '..'],
              message: 'Use the @/ alias instead of parent-relative imports.'
            },
            {
              regex: '^@/[^/]+$|(^|/)index$',
              message:
                'No barrels: import from the file that defines the export (e.g. @/hooks/use-aurora).'
            }
          ]
        }
      ],
      // No barrel files: re-export-everything modules hide dependencies
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ExportAllDeclaration',
          message:
            'No barrel files (export *). Import directly from the source file.'
        }
      ],
      // Dependency direction: pages -> sections -> shared (components/providers/hooks/data)
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: [
                './src/components',
                './src/providers',
                './src/hooks',
                './src/data'
              ],
              from: './src/sections',
              message: 'Shared code must not depend on page sections.'
            },
            ...['hero', 'stacks', 'experience', 'showcase', 'footer'].map(
              (section) => ({
                target: `./src/sections/${section}`,
                from: './src/sections',
                except: [`./${section}`],
                message:
                  'Sections are isolated; move shared code to src/components, hooks or data.'
              })
            )
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
