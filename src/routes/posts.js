const express = require('express')
const router = express.Router()
const dataController = require('../controllers/posts')
const authController = require('../controllers/auth')

router.get('/posts', dataController.getAll);
router.get('/posts/:postId', authController.isAuthenticated, dataController.getOne)
router.post('/posts/', dataController.create)

module.exports = router