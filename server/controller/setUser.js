'use strict';

const http = require('http');
const mysql = require('../config.mysql');
const weixinConfig = require('../weixin/config');

var _ = function() {};

_.prototype = {
  do(params, form) {
    this.params = params;
    this.form = form;
    console.log('this.form', this.form);

    const option = {
      hostname: 'https://api.weixin.qq.com',
      method: 'GET',
      path: `/sns/jscode2session?appid=${weixinConfig.appId}&secret=${
        weixinConfig.appSecret
      }&js_code=${this.form.code}&grant_type=authorization_code`,
    };
    http
      .request(option, (res) => {
        console.log('response: ' + res.statusCode);
      })
      .on('error', (e) => {
        console.log('error: ' + e.message);
      });
    console.log('this.form', this.form);
  },
};

var $ = new _();

module.exports = $;
