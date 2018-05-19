import order from '../../api/order';
import user from '../../api/user';

const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    code: '',
  },
  onLoad(option) {
    this.setData({
      code: option.code,
    });
  },
  bindgetuserinfo(res) {
    if (res.detail.userInfo) {
      const form = {
        code: this.data.code,
        ...res.userInfo,
      };

      user.setUser(form).then((userRes) => {
        if (userRes.data.code === 0) {
          const data = userRes.data.result;
          wx.setStorageSync('userInfo', data);

          if (app.userInfoReadyCallback) {
            app.userInfoReadyCallback(data);
          }

          wx.navigateBack();
        } else {
          wx.showToast({
            title: '用户信息插入失败',
            icon: 'loading',
          });
        }
      });
    }
  },
});
