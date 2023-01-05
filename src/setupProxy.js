const { createProxyMiddleware } = require("http-proxy-middleware");
// 跨域转发地址
const forwardUrl = "http://localhost:3001";
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/proxy", {
      //遇见/proxy前缀的请求，就会触发该代理配置
      target: forwardUrl, //请求转发给谁
      changeOrigin: true, //控制服务器收到的请求头中Host的值
      pathRewrite: {
        "^/proxy": "",
      }, //重写请求路径(必须)
    })
  );
};
