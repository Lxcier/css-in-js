module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' // Ensure this is always last
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'prettier',
    'react-refresh'
  ],
  settings: {
    react: {
      version: 'detect' // Automatically detect the react version
    }
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    'prettier/prettier': 'error', // Make sure prettier errors are shown
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
