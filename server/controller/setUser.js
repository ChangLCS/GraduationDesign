const mysql = require('../config.mysql');
const weixin = require('../weixin');

var _ = function() {};

_.prototype = {
  do(params, form) {
    this.params = params;
    this.form = form;
    console.log('this.form', this);

    const pc = new weixin(this.form.sessionKey, this.form.encryptedData, this.form.iv);
    const data = pc.getWxUserInfo();
    console.log('data', data);
  },
};

var $ = new _();

$.do(
  { name: '李昌盛' },
  {
    sessionKey: '033ZZ5OS1KNAd61gPcPS16rYNS1ZZ5O5',
    encryptedData:
      '8mVA6zpguNkXCAebK1WNvbxP2frXdNtbMyc1NlQJ4XIXVq3Xdaj776cu2aH+fXtqQq3HyPxXJcYZ598iLDswgu6yhC3fZcGwbQ833khj4hF5bIkHIUq20LYsXKDk3nkQerTl53GOsU6v6KsYEf5yrRzPskgAXbp7i9EIb1G3lCwm0ym7oWPdK0e3ewNkkQKHxNeFvJM72Z66qmqd5/Tz3uh1Cm2YT3nfb05uuqNBQVkkOFjLgueUYEVo6cNHyshLAakF93uloUaYMy1QrsIh08hzapLUu2ATx3E64fGyDGCSlTd/V7K61dHw91guNvu0Cs2gWhRWU/OQ2tRht7RnWpUaOhJ5euWL+25VmwiTAOgb3gJa0O92iOxmJnWdhLX4mwHQ2XEtLUcr7W7rRB+bMvCA8BhcEfg7DUOsTIFND6CLuENufILNoh6PuXH9/K1BF9BHzPwytVLD3lJaeZz50sfmiZ0E6lOhmdNz0IXJx47iIEikK49/vHLkUzMJseU6LeF9/KJOBufKbvfMTwSDXw==',
    iv: 'SbWMNkan+I4bg8DyZoHn7g==',
  },
);
