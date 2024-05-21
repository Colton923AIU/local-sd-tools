const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./../config/webpack.config");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (env, argv) =>
  merge(commonConfig(env.target, argv.mode), {
    target: "web",
    entry: path.join(__dirname, "index.tsx"),
    output: {
      path: path.join(__dirname, "../bundle/public/dist"),
      filename: "client.js",
    },
    resolve: {
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.join(__dirname, "tsconfig.json"),
        }),
      ],
    },
  });
