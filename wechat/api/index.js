/**
 * api 初始化文件
 */

import api from '../modules/wx-api-common/api/index.js';

export default api.setOption({
  baseUrl: 'http://localhost:9000/', //  接口的基础地址配置
  params: {
    //  基础参数，即每次调用都要传的参
    openId:
      wx.getStorageSync('userInfo') && wx.getStorageSync('userInfo').openId
        ? wx.getStorageSync('userInfo').openId
        : undefined,
  },
  request(res) {
    res.params.openId =
      wx.getStorageSync('userInfo') && wx.getStorageSync('userInfo').openId
        ? wx.getStorageSync('userInfo').openId
        : undefined;

    wx.showLoading({
      title: '加载中',
    });
  },
  response(res) {
    wx.hideLoading();
  },
});
