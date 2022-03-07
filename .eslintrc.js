const tabWidth = 2

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
  ],

  rules: {
    // Suggestions
    'quote-props': ['warn', 'consistent-as-needed'],
    // Layout & Formatting
    'block-spacing': ['warn', 'never'],
    'comma-dangle': ['warn', 'always-multiline'],
    'eol-last': 'warn',
    'indent': ['warn', tabWidth],
    'jsx-quotes': 'warn',
    'max-len': ['warn', { tabWidth }],
    'no-trailing-spaces': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'padded-blocks': ['warn', 'never'],
    'prefer-arrow-callback': 'warn',
    'quotes': ['warn', 'single'],
    'space-before-blocks': 'warn',

    'import/order': ['warn', {
      'alphabetize': { order: 'asc' },
      'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'type',
      ],
      'newlines-between': 'always',
    }],

    'react/jsx-indent': ['warn', tabWidth],
    'react/jsx-one-expression-per-line': ['warn', { allow: 'literal' }],
  },
}

module.exports = config
