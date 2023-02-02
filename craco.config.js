const CracoLessPlugin = require("craco-less")
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin")

module.exports = {
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": require("path").resolve(__dirname, "src"),
    },

    plugins: [
      //antd日期中文
      new AntdDayjsWebpackPlugin(),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1492FF" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
