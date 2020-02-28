module.exports = {
  "parser": "babel-eslint",
  "env": {
    "jest/globals": true,
    "node": true,
    "browser": true,
    "commonjs": true,
    "es6": true,
  },
  "parserOptions": {
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "jest"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": 0,
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "^16.8.3"
    }
  }
}
