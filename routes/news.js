const express = require('express')
const router = express.Router()
const newsController = require('../controllers/news')
const authentication = require('../middlewares/authentication')
//const authorization = require('../middlewares/authorization')

router.post('/', authentication, newsController.createTransaction)
router.patch('/:id', authentication, newsController.updateTransaction)
router.get('/one', authentication, newsController.getTransactionOne)
router.get('/', authentication, newsController.getTransactions)

module.exports = router