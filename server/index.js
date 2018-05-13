/**
 * @description 随便写的，没用express，顺便当成学习
 * @version 1.0.0
 * @since 真正搭项目还是得用框架啊，不然一手一手来太麻烦了，当几个简单的接口进行访问就得做很多个判断条件来让接口调成功，还有参数的接收
 */

'use strict';

const http = require('http'); //  创建http服务
const url = require('url'); //  分析请求url
const mysql = require('./config.mysql');
const config = require('./config');
const apiPath = require('./apiPath');

// const data = {
//   name: 'Chang',
//   age: 26,
//   birthday: '1992-12-29',
// };

// mysql.connect();

// mysql.query('SELECT * FROM user', (error, result) => {
//   if (error) {
//     console.log('[SELECT ERROR] - ', error.message);
//     return;
//   }
//   console.log('result', result);
// });

// mysql.end();

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true);

  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    const form = JSON.parse(body);

    const reg = new RegExp(/(\/?)(\/.*)/);
    const path = `./controller/${apiPath[urlInfo.pathname.replace(reg, '$2')]}`;

    const apiFun = require(path);
    apiFun
      .do({}, form)
      // .then((result) => {})
      // .catch((err) => {});
  });

  // if (/\/{1,2}test$/i.test(urlInfo.pathname)) {
  //   res.writeHead(200, Object.assign({}, config.responseHeader));
  //   res.end(
  //     JSON.stringify(
  //       Object.assign({}, config.responseSuccess, {
  //         result: data,
  //       }),
  //     ),
  //   );
  // } else {
  //   res.end(JSON.stringify(config.responseError));
  // }
});

server.listen(9000);

console.log('-----------------------------');
console.log('9000 --------------  server running');
