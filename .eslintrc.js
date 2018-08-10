module.exports = {
    "extends": [
        "airbnb",
        "plugin:flowtype/recommended",
    ],
    "rules": {
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/prop-types": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "linebreak-style": ["error", "windows"],
        // "linebreak-style": ["error", "unix"],
    },
    settings: {
        "jsx": true,
    },
    parser: "babel-eslint",
    plugins: [
        "flowtype",
    ]
};