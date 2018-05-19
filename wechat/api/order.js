/**
 * 关于订单的接口
 */

import api from '../index';

const path = {
  orderCreate: '/order/create',
};

//  创建订单
const orderCreate = (form) =>
  api.post(path.orderCreate, {
    ...form,
  });

export default {
  orderCreate,
};
