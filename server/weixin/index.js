var WXBizDataCrypt = require('./WXBizDataCrypt');

var appId = require('./config').appId;

var _ = function(sessionKey, encryptedData, iv) {
  this.sessionKey = sessionKey;
  this.encryptedData = encryptedData;
  this.iv = iv;
};

_.prototype.getWxUserInfo = function() {
  const pc = new WXBizDataCrypt(appId, this.sessionKey);
  const data = pc.decryptData(this.encryptedData, this.iv);
};

module.exports = _;
