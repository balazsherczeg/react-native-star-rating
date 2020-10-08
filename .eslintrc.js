module.exports = {
  "extends": "airbnb",
  "rules": {
    "import/prefer-default-export": 0,
    "no-plusplus": [0],
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    "object-curly-spacing": ["error", "never"],
    "react/destructuring-assignment": [0],
    "react/forbid-prop-types": [2, { "forbid": ["any"]}],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": 0,
  },
};
