const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8000",
      // target: "https://localhost:4009",
      changeOrigin: true,
    })
  );
};
