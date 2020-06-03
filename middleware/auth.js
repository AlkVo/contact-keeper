const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //从 header 获得 token
  const token = req.header('x-auth-token');

  //token 不存在
  if (!token) {
    return res.status(401).json({ msg: '没有 token ,认证失败' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'token 无效' });
  }
};
