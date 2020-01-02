const express = require('express');
const router = express.Router();
const user = require('../routes/user');
const news = require('../routes/news');
const member = require('../routes/member');

router.use('/user', user)
router.use('/news', news)
router.use('/member', member)

module.exports = router