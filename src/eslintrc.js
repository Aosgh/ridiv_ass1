// .eslintrc.js

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
	  'plugin:react/recommended',
	  'plugin:@typescript-eslint/recommended',
	  'prettier/@typescript-eslint',
	  'plugin:prettier/recommended',
	],
	parserOptions: {
	  ecmaVersion: 2021,
	  sourceType: 'module',
	  ecmaFeatures: {
		jsx: true,
	  },
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
	  'react/react-in-jsx-scope': 'off',
	  'react/prop-types': 'off',
	  '@typescript-eslint/explicit-module-boundary-types': 'off',
	  'prettier/prettier': ['error', { singleQuote: true, semi: false }],
	},
  };
  