const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
  esline: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {},
    },
  ],
};
