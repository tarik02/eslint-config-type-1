module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        'no-console': [
            'error'
        ],
        'no-alert': [
            'error'
        ],
        'no-debugger': [
            'error'
        ],

        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': [
            'error',
            'never'
        ],

        'semi': 'off',
        '@typescript-eslint/semi': [
            'error',
            'always'
        ],

        'indent': 'off',
        '@typescript-eslint/indent': [
            'error',
            4
        ],

        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-infix-ops': [
            'error',
            {
                int32Hint: false
            }
        ],
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false
            }
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'array-bracket-spacing': [
            'error',
            'always'
        ],
        'template-curly-spacing': [
            'error',
            'always'
        ],
        'arrow-spacing': [
            'error'
        ],

        'dot-notation': [
            'error'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        'quote-props': [
            'error',
            'consistent-as-needed'
        ],

        'arrow-parens': [
            'error',
            'as-needed'
        ],

        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'comma',
                    requireLast: false
                },
                singleline: {
                    delimiter: 'comma',
                    requireLast: false
                },
                multilineDetection: 'brackets'
            }
        ]
    }
};