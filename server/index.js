/**
 * @description 随便写的，没用express，顺便当成学习
 * @version 1.0.0
 * @since 真正搭项目还是得用框架啊，不然一手一手来太麻烦了，当几个简单的接口进行访问就得做很多个判断条件来让接口调成功，还有参数的接收
 */

'use strict';

const http = require('http');
const url = require('url');
const mysql = require('./config.mysql.js');
const config = require('./config.js');

const data = {
  name: 'Chang',
  age: 26,
  birthday: '1992-12-29',
};

mysql.connect();

mysql.query('SELECT * FROM user', (error, result) => {
  if (error) {
    console.log('[SELECT ERROR] - ', error.message);
    return;
  }
  console.log('result', result);
});

mysql.end();

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true);
  if (/\/{1,2}test$/i.test(urlInfo.pathname)) {
    res.writeHead(200, Object.assign({}, config.responseHeader));
    res.end(
      JSON.stringify(
        Object.assign({}, config.responseSuccess, {
          result: data,
        }),
      ),
    );
  } else {
    res.end(JSON.stringify(config.responseError));
  }
});

server.listen(9000);

console.log('-----------------------------');
console.log('server running');
