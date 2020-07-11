/* eslint-env node */
const plugins = ["prettier"];
const baseExtends = ["eslint:recommended"];
const prettierExtends = ["prettier"];

module.exports = {
  plugins: [...plugins],
  extends: [...baseExtends, ...prettierExtends],
  env: {
    es2020: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      plugins: [...plugins, "@typescript-eslint"],
      extends: [
        ...baseExtends,
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        ...prettierExtends,
        "prettier/@typescript-eslint",
      ],
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
