const express = require('express');
const router = express.Router();

//@router GET api/auth
//@详细   用户登录
//@权限   private
router.get('/', (req, res) => {
  res.send('用户登录');
});

//@router GET api/auth
//@详细   用户验证 和 获得 token
//@权限   private
router.post('/', (req, res) => {
  res.send('用户验证');
});

module.exports = router;
