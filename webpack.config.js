const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

if (process.env.NODE_ENV === "production") {
    module.exports = {
        devtool: "none",
        plugins: [new BundleAnalyzerPlugin],
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            axios: "axios",
            "vue-router": "VueRouter"
        }
    }
} else {
    module.exports = {}
}