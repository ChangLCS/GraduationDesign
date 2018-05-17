// pages/man/addNews/addNews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   value:wx.getStorageSync('news')
  },
  formsubmit:function(e){
   
    var warn ='填写完成';
    var flag = false;
     var that = this
     if (e.detail.value.newsOne == ""){
       warn ='请输入你的手机号码'
     } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.newsOne))){
       warn = '请输入正确的手机号码'
     } else if (e.detail.value.newsTwo == "") {
       warn = '请输入你的身份证号码'
     } else if (!e.detail.value.newsTwo.lenght ==18 ) {
       warn = '请输入你的正确身份证号码'
     } else if (!e.detail.value.newsThree.lenght ==8) {
       warn = '请输入你的正确学号'
     }
     else if (e.detail.value.newsThree == '') {
       warn = '请输入你的学号'
     }else{
       flag == true;
       
       var value = e.detail.value
       wx.setStorageSync('news', value)
       
    wx.switchTab({
      url: '../../man/man',
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