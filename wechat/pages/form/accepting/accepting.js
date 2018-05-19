import order from '../../../api/order';

//  自己  待接单
Page({
  data: {
    list: [],
  },

  onLoad() {
    order.orderList(0).then((res) => {
      if (res.data.code === 0) {
        const data = res.data.result;
        this.setData({
          list: data,
        });
      }
    });
  },
});
