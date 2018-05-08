// pages/form/fulfilled/fulfilled.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  list:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //从首页选择过来的订单数据,    
    var num1 = options.index
    //判断是否是首页跳转过来的
    if (num1) {
      var list = wx.getStorageSync('list1') || []
      var loaf = wx.getStorageSync('num1')
      list.push(loaf)
      this.setData({ list: list })
      this.setData({ num1: num1 })
      wx.setStorageSync('list1', list)
    } else {
      var list = wx.getStorageSync('list1')
      this.setData({ list: list })

    }
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