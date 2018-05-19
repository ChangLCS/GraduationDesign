import order from '../../api/order';

const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },
  fulfillOrder(e) {
    const id = e.currentTarget.dataset.id;
    order.orderAccept(id).then((res) => {
      if (res.data.code === 0) {
        wx.navigateTo({
          url: '../form/fulfill/fulfill',
        });
      } else {
        wx.navigateTo({
          url: '../man/addNews/addNews',
        });
      }
    });
  },

  onLoad() {
    const _this = this;
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo && userInfo.openId) {
      _this.dataInit();
    } else {
      app.userInfoReadyCallback = (res) => {
        _this.dataInit();
      };
    }
  },
  dataInit() {
    order.orderOther().then((res) => {
      if (res.data.code === 0) {
        const data = res.data.result;
        this.setData({
          list: data,
        });
      }
    });
  },
});
