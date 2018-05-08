/**
 * 主页文件的 api
 */

import api from '../index';

const path = {
  test: '/test',
};

const test = (form) =>
  api.get(path.test, {
    ...form,
  });

export default {
  test,
};
