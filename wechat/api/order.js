/**
 * 关于订单的接口
 */

import api from './index';

const path = {
  orderCreate: '/order/create',
  orderList: '/order/list',
  orderOther: '/order/other',
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

//  获取除了自己以外的订单
const orderOther = (status) =>
  api.get(path.orderOther, {
    status,
  });

export default {
  orderCreate,
};
