module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    quotes: [2, "double"],
    "default-param-last": 0,
    "no-unused-vars": [1, { args: "none" }],
    "import/extensions": [
      2,
      "never",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "no-param-reassign": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 1,
    "no-console": 0,
    "react/jsx-props-no-spreading": 0,
    "max-len": 0,
    "no-unused-expressions": 0,
    "no-shadow": 0,
    "react/style-prop-object": 0,
    "class-methods-use-this": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
  },
};
