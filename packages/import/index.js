module.exports = {
    extends: [
        'plugin:import/recommended',
        'plugin:import/typescript'
    ],
    plugins: [
        'import'
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.ts',
                '.tsx'
            ]
        }
    },
    rules: {
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true
            }
        ],
        'import/no-unresolved': 'off',
        'import/newline-after-import': [
            'error',
            {
                count: 1
            }
        ],
        'import/no-duplicates': 'off',
        'import/no-named-as-default': 'off'
    }
};
