import order from '../../api/order';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    form: {},
  },
  FormSubmit: function(e) {
    const form = e.detail.value;

    let msg = '';
    if (!form.phone) {
      msg = '请填写手机';
    } else if (!form.address) {
      msg = '请填写订单地址';
    } else if (!form.remarks) {
      msg = '请填写您的要求';
    } else if (!form.amount || !/^\d+(\.\d+?||\d+?)$/.test(form.amount)) {
      msg = '请输入正确的金额';
    }
    console.log(form);
    if (msg) {
      wx.showModal({
        title: msg,
        content: '提交失败',
        showCancel: false,
      });
      return;
    }

    order.orderCreate(form).then((res) => {
      console.log('res', res);
    });
    // var value = wx.getStorageSync('value') || [];
    // value.push(e.detail.value);
    // wx.setStorageSync('value', value);
    // wx.navigateTo({
    //   url: '../form/accepting/accepting',
    // });

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
  onLoad() {
    const userInfo = wx.getStorageSync('userInfo');
    this.setData({
      form: {
        address: userInfo.address || '广东省深圳市南山区',
        phone: userInfo.phone,
      },
    });
  },
});
