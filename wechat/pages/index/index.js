Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      name: '胖东1',
      avatarUrl:'../../image/1.png',
      address:'竹园九栋529',
      content:'快递代取 圆通快递 送上楼 快递代取 圆通快递 送上楼 快递代取 圆通快递 送上楼 快递代取 圆通快递 送上楼1'
    },
    {
        name: '胖东2',
        avatarUrl: '../../image/1.png',
        address: '竹园九栋529',
        content: '快递代取 圆通快递 送上楼 快递代取 圆通快递 送上楼 快递代取 圆通快递 送上楼 快递代取 圆通快递 送上楼2'},
    {
      name: '胖东4',
      avatarUrl: '../../image/1.png',
      address: '竹园九栋529',
      content: '快递代取 圆通快递 送上楼 快递代取 圆通快递 送上楼 快递代取 圆通快递 送上楼 快递代取 圆通快递 送上楼4'
    },
    ]
    
  },
  fulfillOrder:function(e){
    var num = e.currentTarget.dataset.index
    wx.setStorageSync('num', this.data.list[num])
    wx.navigateTo({
      url: '../form/fulfill/fulfill?num='+num,
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this 
    // wx.request({
    //   url: 'host+接口',
    //   method:'GET',
    //   header: { 'content-type': 'application/json'} ,
    //   success:function(res){

    //   }
    //})
    
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