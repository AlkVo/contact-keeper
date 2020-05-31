const express = require('express');
const router = express.Router();

//@router POST api/users
//@详细   注册一个用户
//@权限   public
router.post('/', (req, res) => {
  res.send('用户注册');
});

module.exports = router;
