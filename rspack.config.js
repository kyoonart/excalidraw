const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  builtins: {
    html: [{ template: "./index.html" }],
  },
};
