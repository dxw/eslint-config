/* eslint-env node */
const baseConfig = require("../base");

const extraPlugins = ["react", "react-hooks"];
const extraExtends = [
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "prettier/react",
];

const overrides = baseConfig.overrides.map((override) => {
  if (override.files.includes("**/*.ts?(x)")) {
    return {
      ...override,
      plugins: [...override.plugins, ...extraPlugins],
      extends: [...override.extends, ...extraExtends],
    };
  }

  return override;
});

module.exports = {
  ...baseConfig,
  plugins: [...baseConfig.plugins, ...extraPlugins],
  extends: [...baseConfig.extends, ...extraExtends],
  settings: {
    ...baseConfig.settings,
    react: {
      version: "detect",
    },
  },
  overrides,
};
