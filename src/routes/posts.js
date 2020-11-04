const express = require('express')
const router = express.Router();

const dataController = require('../controllers/posts')
const authController = require('../controllers/auth')

router.get('/', dataController.getAll);
router.get('/:postId', authController.isAuthenticated, dataController.getOne)
router.post('/', dataController.create)

module.exports = router