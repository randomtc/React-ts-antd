module.exports = {

  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": require("path").resolve(__dirname, 'src')
    },

  },

  //使用less
  plugins: [
    {
      plugin:  require('craco-less'),
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],

};