module.exports = {
  root: true,
  env: {
    es6: true,
    es2017: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'standard-react',
  ],
  parserOptions: {
    ecmaVersion: 9,
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'no-undef': 'warn',
    'linebreak-style': 0,
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    camelcase: ['off'],
    'brace-style': [0, '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'no-case-declarations': 'warn',
    'prefer-const': 'error',
    'padded-blocks': 'warn',
    'import/first': 'warn',
    'one-var': 'off',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'prefer-promise-reject-errors': 'error',
    'no-return-await': 'error',
    'lines-between-class-members': 'off',
    'template-curly-spacing': 'off',
    'no-multi-spaces': 'warn',
    'no-this-before-super': 'warn',
    'no-unreachable': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'object-property-newline': 'warn',
    'quote-props': 'warn',
    // React
    'react/prop-types': 'off', // для TypeScript проектов
    'react/jsx-curly-spacing': ['error', { when: 'always', allowMultiline: true }],
  },
}
// TODO: Use ESNext : https://www.npmjs.com/package/eslint-config-recommended
// TODO: Configure switch-case "fall through" : https://eslint.org/docs/rules/no-fallthrough
// TODO: Recheck rules and add/remove needed
/*
  'no-console': 'off',
  'no-multi-spaces': 'off',
  'no-const-assign': 'warn',
*/
