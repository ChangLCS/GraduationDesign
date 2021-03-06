USE weixin;

create table wx_users
(
  id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  openId VARCHAR(255) DEFAULT NULL,
  nickName VARCHAR(255) DEFAULT NULL,
  gender INT(11) DEFAULT NULL,
  city VARCHAR(255) DEFAULT NULL,
  province VARCHAR(255) DEFAULT NULL,
  country VARCHAR(255) DEFAULT NULL,
  avatarUrl VARCHAR(255) DEFAULT NULL,
  unionId VARCHAR(255) DEFAULT NULL,
  phone VARCHAR(255) DEFAULT NULL,
  idNo VARCHAR(255) DEFAULT NULL,
  studentNo VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY(id)
)

create TABLE wx_orders (
  id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  createId INT(11) DEFAULT NULL,
  createTime DATETIME DEFAULT NULL,
  phone VARCHAR(255) DEFAULT NULL,
  address VARCHAR(255) DEFAULT NULL,
  remarks VARCHAR(255) DEFAULT NULL,
  amount DECIMAL(18,2) DEFAULT NULL,
  acceptId INT(11) DEFAULT NULL,
  acceptTime DATETIME DEFAULT NULL,
  status INT(11) DEFAULT 0 COMMENT '0 待接单，1 已接单，2 已完成，3 已取消'
)

-- Select rows from a Table or View 'TableOrViewName' in schema 'SchemaName'
SELECT o.*,u.nickName FROM weixin.wx_orders o left JOIN weixin.wx_users u ON o.createId = u.id
WHERE o.status = 0 and o.createId = 3;