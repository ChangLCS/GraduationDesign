/**
 * @description 随便写的，没用express，顺便当成学习
 * @version 1.0.0
 */

'use strict';

const http = require('http');
const url = require('url');
const config = require('./config.js');

const data = {
  name: 'Chang',
  age: 26,
  birthday: '1992-12-29',
};

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
