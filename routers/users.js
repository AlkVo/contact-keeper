const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
//@router POST api/users
//@详细   注册一个用户
//@权限   public
router.post(
  '/',
  [
    check('name', '必须输入名字').not().isEmpty(),
    check('email', '请输入有效的邮箱').isEmail(),
    check('password', '密码的长度至少为 6 位').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      //用户已存在
      if (user) {
        return res.status(400).json({ msg: '用户早已存在' });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          //过期时间
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Sever Error');
    }
  }
);

module.exports = router;
