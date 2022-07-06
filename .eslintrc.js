module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        semi: 0,
        'comma-dangle': 0,
        quotes: [2, 'single', 'avoid-escape'],
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-filename-extension': [
          1,
          { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
        ],
        'react/react-in-jsx-scope': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'max-len': ['error', { code: 140 }],
    }
}
