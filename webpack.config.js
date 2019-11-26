const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".mjs", ".js", "*"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {loader: "awesome-typescript-loader"}
                ],
                exclude: /(node_modules)/
            }
        ]
    }
};
