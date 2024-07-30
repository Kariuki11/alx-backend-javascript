import js from '@eslint/js';
import airbnbBase from 'eslint-config-airbnb-base';
import jest from 'eslint-plugin-jest';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    environment: {
      browser: false,
      es6: true,
      jest: true,
    },
    plugins: {
      jest,
    },
    rules: {
      ...airbnbBase.rules,
      ...jest.configs.all.rules,
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
  },
  {
    files: ['*.js'],
    excludedFiles: 'babel.config.js',
  },
];
