/**
 * 主页文件的 api
 */

import api from './index';

const path = {
  setUser: '/set/user',
  getUser: '/get/user',
  register: '/register',
};

//  初始化用户信息
const setUser = (form) =>
  api.post(path.setUser, {
    ...form,
  });

//  获取用户信息
const getUser = () => api.get(path.getUser);

//  注册
const register = (form) =>
  api.post(path.register, {
    ...form,
  });

export default {
  getUser,
  setUser,
  register,
};
