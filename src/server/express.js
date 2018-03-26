import express from "express";
import path from "path";

const server = express();

const isProd = process.env.NODE_ENV === "production";

if (!isProd) {
  const webpack = require("webpack");
  const config = require("../../webpack.dev.config.js");
  const compiler = webpack(config);
  // require("webpack-mild-compile")(compiler);

  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  );
  const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);
  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddleware);
}

const staticMiddleware = express.static("dist");

// server.use(staticMiddleware);
const expressStaticGzip = require("express-static-gzip");
server.use(
  expressStaticGzip("dist", {
    enableBrotli: true
  })
);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(
    `Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`
  );
});
