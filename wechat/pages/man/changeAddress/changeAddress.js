// pages/man/changeAddress/changeAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  list:[]
  },
  formReset:function(e){
    var value = wx.getStorageSync('value1') || []
    value.splice(this.data.index, 1)
    wx.setStorageSync('value1', value)

    wx.redirectTo({
      url: '../chooseAddress/chooseAddress'
    })
  },
  formSubmit:function(e){
    //数据校验
    var warn = "修改成功";
    var that = this;
    var flag = false;
    if (e.detail.value.tel == "") {
      warn = "请填写您的手机号！";
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))) {
      warn = "手机号格式不正确";
    } else if (e.detail.value.address == "") {
      warn = "请输入您的具体地址";
    }
    else {
      flag == true;
      //数据修改
      var value = wx.getStorageSync('value1') || []
      value.splice(this.data.index, 1, e.detail.value)
      wx.setStorageSync('value1', value)

      wx.redirectTo({
        url: '../chooseAddress/chooseAddress',
      })
    }
    if (flag == false) {
      wx.showModal({
        title: '提示',
        content: warn
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var list = wx.getStorageSync('value1')


    this.setData(list[options.index])
    this.setData({ index: options.index })
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