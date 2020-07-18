/* eslint-env node */
const baseConfig = require("../react-library");

const overrides = baseConfig.overrides.map((override) => {
  if (override.files.includes("**/*.ts?(x)")) {
    return {
      ...override,
      rules: {
        ...override.rules,
        "react/prop-types": "off",
      },
    };
  }

  return override;
});

module.exports = {
  ...baseConfig,
  overrides,
};
