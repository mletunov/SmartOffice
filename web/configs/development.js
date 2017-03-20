module.exports = function (_path) {

    return {
        devtool: 'source-map',
        devServer: {
            hot: true,
            historyApiFallback: true,
            proxy: [{
                path: "/api/",
                target: "http://localhost:3001"
            }]
        },
    }
};