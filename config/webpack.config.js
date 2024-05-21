const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (target, mode) => {
	return {
		mode,
		optimization: {
			minimize: mode !== "production" ? false : true,
		},
		devtool: "source-map",
		resolve: {
			modules: ["node_modules"],
			extensions: [".js", ".tsx", ".ts", ".scss", "css", ".svg"],
		},
		plugins: [new MiniCssExtractPlugin()],
		infrastructureLogging: {
			level: "error",
		}, // reduce webpack logging when using concurrently
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: {
						loader: "ts-loader",
					},
					exclude: /node_modules/,
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								emit: target !== "server",
							},
						},
						{
							loader: "css-loader",
							options: {
								modules: {
									auto: true,
									localIdentName: "[name]__[local]___[hash:base64:5]",
								},
							},
						},
						"sass-loader",
					],
				},
				{
					test: /\.svg$/i,
					issuer: /\.[jt]sx?$/,
					use: [{ loader: "@svgr/webpack", options: { typescript: true } }],
				},
			],
		},
	};
};
