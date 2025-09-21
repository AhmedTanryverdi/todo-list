const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src", "index.ts"),

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.ts$/,
				exclude: /(node_modules)/,
				use: {
					loader: "ts-loader",
				},
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},

	resolve: {
		extensions: [".ts", ".js"],
	},

	devServer: {
		port: 3000,
		open: true,
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
			filename: "index.html",
		}),
	],
	mode: "development",
	devtool: "source-map",
};
