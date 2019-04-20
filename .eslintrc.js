module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    plugins: ['react-hooks'],
    rules: {
        'brace-style': ['error', 'stroustrup'],
        'camelcase': 0,
        'default-case': 0,
        'indent': ['error',
            4,
            { 'SwitchCase': 1 }
        ],
        'new-cap': 0,
        'max-len': 0,
        'no-bitwise': 0,
        'no-console': 0,
        'no-param-reassign': 0,
        'no-underscore-dangle': 0,
        'no-plusplus': 0,
        'prefer-destructuring': 0,
        'prefer-template': 0,
        'semi': 0,
        'semi-style': ['error', 'first'],

        'react/forbid-prop-types': 0,
        'react/destructuring-assignment': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/no-array-index-key': 0,
        'react/prefer-stateless-function': 0,
    },
    globals: {
        window: true
    }
}
