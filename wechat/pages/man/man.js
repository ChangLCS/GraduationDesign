Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: wx.getStorageSync('userInfo'),
  },
  chooseAddress: function() {
    wx.navigateTo({
      url: 'chooseAddress/chooseAddress',
    });
  },
  addNews: function() {
    wx.navigateTo({
      url: 'addNews/addNews',
    });
  },
});
