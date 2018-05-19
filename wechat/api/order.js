/**
 * 关于订单的接口
 */

import api from './index';

const path = {
  orderCreate: '/order/create',
  orderList: '/order/list',
  orderOther: '/order/other',
  orderAccept: '/order/accept',
  orderListAccept: '/order/list/accept',
};

//  创建订单
const orderCreate = (form) =>
  api.post(path.orderCreate, {
    ...form,
  });

//  status 0 待接单，1 已接单，2 已完成，3 已取消
//  获取自己的订单
const orderList = (status) =>
  api.get(path.orderList, {
    status,
  });

//  获取所有的未接订单，别人的
const orderOther = () => api.get(path.orderOther);

//  自己接的别人订单
const orderListAccept = (status) =>
  api.get(path.orderListAccept, {
    status,
  });

//  接订单
const orderAccept = (id) =>
  api.post(path.orderAccept, {
    id,
  });

export default {
  orderCreate,
  orderList,
  orderOther,
  orderListAccept,
  orderAccept,
};
