const express = require('express');
const router = express.Router();

//@router GET api/contacts
//@详细   获得所有用户联系人
//@权限   private
router.get('/', (req, res) => {
  res.send('获得所有联系人');
});

//@router GET api/contacts
//@详细   添加一个新联系人
//@权限   private
router.post('/', (req, res) => {
  res.send('添加联系人');
});

//@router GET api/contacts/:id
//@详细   更新联系人
//@权限   private
router.put('/', (req, res) => {
  res.send('更新联系人');
});

//@router GET api/contacts/:id
//@详细   删除联系人
//@权限   private
router.delete('/', (req, res) => {
  res.send('删除联系人');
});

module.exports = router;
