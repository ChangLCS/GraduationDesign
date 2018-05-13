/**
 * 主页文件的 api
 */

import api from '../index';

const path = {
  setUser: '/set/user',
};

const setUser = (form) =>
  api.post(path.setUser, {
    ...form,
  });

export default {
  setUser,
};
