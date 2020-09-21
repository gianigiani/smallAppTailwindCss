const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
