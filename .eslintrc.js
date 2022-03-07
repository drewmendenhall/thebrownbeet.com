/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
  ],

  rules: {
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
  },
}

module.exports = config
