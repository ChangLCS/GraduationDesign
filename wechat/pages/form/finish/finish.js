import order from '../../../api/order';

//  自己  待完成
Page({
  data: {
    list: [],
  },

  onLoad() {
    order.orderList(1).then((res) => {
      if (res.data.code === 0) {
        const data = res.data.result;
        this.setData({
          list: data,
        });
      }
    });
  },
});
