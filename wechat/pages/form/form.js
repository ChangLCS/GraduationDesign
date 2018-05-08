Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  //跳转到待接单界面
  accepting: function () {
    wx.navigateTo({
      url: 'accepting/accepting',
    })
  },
  //跳转到待完成界面
  finish: function () {
    wx.navigateTo({
      url: 'finish/finish',
    })
  },
  //跳转到已完成界面
  finished: function () {
    wx.navigateTo({
      url: 'finished/finished',
    })
  },
  //跳转到待完成界面
  fulfill: function () {
    wx.navigateTo({
      url: 'fulfill/fulfill',
    })
  },
  //跳转到已完成界面
  fulfilled: function () {
    wx.navigateTo({
      url: 'fulfilled/fulfilled',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})