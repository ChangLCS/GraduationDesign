// pages/man/addNews/addNews.js

import api from '../../../api/user/index';

Page({
  data: {
    form: {},
  },
  formsubmit(e) {
    let warn = '';
    const form = e.detail.value;

    if (!form.phone) {
      warn = '请输入你的手机号码';
    } else if (!/^1(3|4|5|7|8)\d{9}$/.test(form.phone)) {
      warn = '请输入正确的手机号码';
    } else if (!form.idNo) {
      warn = '请输入你的身份证号码';
    } else if (form.idNo.length !== 18) {
      warn = '请输入你的正确身份证号码';
    } else if (!form.studentNo) {
      warn = '请输入你的学号';
    } else if (form.studentNo.length !== 8) {
      warn = '请输入你的正确学号';
    }
    if (warn) {
      wx.showModal({
        title: '提示',
        content: warn,
      });
    } else {
      api.register(form).then((res) => {
        if (res.data.code === 0) {
          wx.switchTab({
            url: '../../man/man',
          });
        }
      });
    }
  },
  onLoad() {
    api
      .getUser()
      .then((res) => {
        const form = res.data.result;
        this.setData({
          form,
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  },
});
