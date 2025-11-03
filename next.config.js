/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  // Si necesitas assetPrefix para CDN, lo configuras en export
  webpack: (config, { isServer }) => {
    // Activar salida UMD cuando BUILD_WIDGET=true
    if (process.env.BUILD_WIDGET === "true") {
      config.output = config.output || {};
      config.output.library = ["widgets", "MySpa"]; // window.widgets.MySpa
      config.output.libraryTarget = "window";
      // nombre de archivo por entry:
      config.output.filename = "[name].js";
      // Evitar HMR en build UMD
      config.optimization = config.optimization || {};
      config.optimization.runtimeChunk = false;
    }

    // Ajustes comunes para compatibilidad con widgets
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // si necesitas alias @ para src, lo puedes agregar aquí
      "@": path.resolve(__dirname, "./src"),
    };

    return config;
  },
};
