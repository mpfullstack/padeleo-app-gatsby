/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint-config-blvd/react",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "max-len": ["error", { code: 140, ignoreUrls: true }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [
          { char: ">", alternatives: ["&gt;"] },
          { char: "}", alternatives: ["&#125;"] },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
