const express = require('express');
const router = express.Router();
const user = require('../routes/user');
const news = require('../routes/news');
//const proposalController = require('../routes/product');

router.use('/user', user)
router.use('/news', news)
//router.use('/product', bussinessController)

module.exports = router