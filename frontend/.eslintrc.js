module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb',
        'prettier',
        'prettier/react'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier',
        'react-hooks',
        'eslint-plugin-import-helpers'
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.js'] }
        ],
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'no-console': ['error', {allow: ['tron']}],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-props-no-spreading': 'off',
        'consistent-return': 'off',
        'no-underscore-dangle': 'off',
        'react/no-array-index-key': 'off',
        'camelcase': 'off',
        'import-helpers/order-imports': [
            'warn',
            { // example configuration
                newlinesBetween: 'always',
                groups: [
                    ['/^react/'],
                    'module',
                    '/^@shared/',
                    ['parent', 'sibling', 'index', '/^~/'],
                ],
                alphabetize: { order: 'asc', ignoreCase: true },
            },
        ],
    },
    settings: {
        "import/resolver": {
            "babel-plugin-root-import": {
                rootPathSuffix: "src"
            },
        },
    },
};


