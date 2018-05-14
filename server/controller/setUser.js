'use strict';

const http = require('https');
const mysql = require('../config.mysql');
const weixinConfig = require('../weixin/config');

var _ = function() {};

_.prototype = {
  do(params, form) {
    this.params = params;
    this.form = form;
    console.log('this.form', this.form);

    const path = `https://api.weixin.qq.com/sns/jscode2session?appid=${weixinConfig.appId}&secret=${
      weixinConfig.appSecret
    }&js_code=${this.form.code}&grant_type=authorization_code`;

    http.get(path, (res) => {
      let resData = '';
      res.on('data', (body) => {
        resData += body;
      });
      res.on('end', () => {
        resData = JSON.parse(resData);
        this.form = Object.assign(this.form, {
          openId: resData.openid,
        });

        mysql.connect();

        mysql.query(
          'SELECT id FROM weixin.wx_users WHERE openId = ?',
          [this.form.openId],
          (error, results, fields) => {
            let sql = '';
            const sqlForm = [
              this.form.avatarUrl,
              this.form.city,
              this.form.country,
              this.form.province,
              this.form.gender,
              this.form.nickName,
              this.form.openId,
              results[0] ? results[0].id : undefined,
            ];
            if (results.length) {
              sql =
                'UPDATE wx_users SET avatarUrl = ? , city = ? , country = ? , province = ?, gender = ? , nickName = ? , openId = ? where id = ?';
            } else {
              sql =
                'INSERT INTO wx_users SET avatarUrl = ? , city = ? , country = ? , province = ?, gender = ? , nickName = ? , openId = ?';
            }

            const sqlstr = mysql.query(sql, sqlForm, (doError, doResult, doFields) => {
              console.log('doError, doResult, doFields', doError, doResult, doFields);
              mysql.end();
              // if (doError) {
              // }
            });
          },
        );
      });
    });
  },
};

var $ = new _();

module.exports = $;
