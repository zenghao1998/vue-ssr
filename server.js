const fs = require('fs');
const path = require('path');
const express = require('express');
const server = express();
server.use(express.static('dist'));
//获取到服务端vue代码
const bundle = fs.readFileSync(path.resolve(__dirname, './dist/server.js'), 'utf-8');
//拿着js代码和模板生成字符串
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
    template: fs.readFileSync(path.resolve(__dirname, './dist/index.ssr.html'), 'utf-8'), // 服务端渲染数据
});
server.get('*', (req, res) => {
    // req.url = req.url === '/favicon.ico' ? '/' : req.url
    // try {
    if (req.url !== "/favicon.ico") {
        renderer.renderToString({
            url: req.url
        }).then((html) => {
            res.end(html)
        }).catch((error) => {
            if (error.code == 404) {
                res.writeHead(404, {
                    "content-type": "text/html;charset=utf8"
                })
                res.end('找不到页面')
            }
        })
    }
});
server.listen(8011, () => {
    console.log('http://127.0.0.1:8011');
});