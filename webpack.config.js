const { merge } = require("webpack-merge");
const commonConfig = require("./config/webpack.config");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (env, argv) =>
  merge(commonConfig(env.target, argv.mode), {
    target: "node",
    node: {
      __dirname: true,
    },
    experiments: {
      topLevelAwait: true,
    },
    externals: [nodeExternals()],
    entry: path.join(__dirname, "index.ts"),
    output: {
      path: path.join(__dirname, "bundle"),
      filename: "index.js",
    },
    resolve: {
      extensions: [".js", ".tsx", ".ts", ".scss"],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.join(__dirname, "tsconfig.json"),
        }),
      ],
    },
    plugins: [
      new FileManagerPlugin({
        events: {
          onEnd: {
            copy: [
              {
                source: path.join(__dirname, "views"),
                destination: path.join(__dirname, "bundle/views"),
              },
              {
                source: path.join(__dirname, "public"),
                destination: path.join(__dirname, "bundle/public"),
              },
              {
                source: path.join(__dirname, "package.json"),
                destination: path.join(__dirname, "bundle/package.json"),
              },
              {
                source: path.join(__dirname, ".env"),
                destination: path.join(__dirname, "bundle/.env"),
              },
            ],
          },
        },
      }),
    ],
  });
