module.exports = [
    {
        files: ['**/*.js'],
        ignores: ['**/*.env'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                node: true,
            },
        },
        rules: {
            'no-unused-vars': 'error',
            'no-console': 'off',
        },
    },
];
