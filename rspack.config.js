const path = require("path");
const rspack = require("@rspack/core");

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  plugins: [new rspack.HtmlRspackPlugin({ template: "./index.html" })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
