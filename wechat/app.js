App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch() {
    wx.showToast({
      title: '登录中',
      icon: 'loading',
    });

    // setTimeout(function() {
    // wx.hideToast();
    // }, 2000);
    wx.login({
      success: (res) => {
        if (res.code) {
          console.log('res', res);
          this.getUserInfo(res.code);
        } else {
        }
      },
    });
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {},

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {},

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {},
  //  获取用户信息
  getUserInfo(code) {
    wx.getUserInfo({
      success: function(res) {
        // success
        console.log(res);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      },
    });
  },
});
