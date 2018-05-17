Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  FormSubmit:function(e){
    //表单提交后，在成功返回函数success中设置this.setData（{name：''}）
    console.log(e.detail.value)
    var value = wx.getStorageSync('value')||[]
    value.push(e.detail.value)
    wx.setStorageSync('value', value)
   wx.navigateTo({
     url: '../form/accepting/accepting'
    })
    //var that = this
    // wx.request({
    //   url: 'host+接口',
    //   data: 'formData+avatarUrl+nickname',
    //   header: {'Content-Type':'application/json'},
    //   method: 'POST',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {

    //   },
      
    // })
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