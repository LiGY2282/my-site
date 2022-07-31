
module.exports = {
    devServer: {
        proxy: "https://study.duyiedu.com"
    },
    configureWebpack: require("./webpack.config")
}