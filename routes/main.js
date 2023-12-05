const express = require('express')

const controller = require('../controllers/mainController')

const router = express.Router()

router.get("/", controller.index)
router.get("/login", controller.login)
router.get("/register", controller.register)
router.get("/errorLogin", controller.errorLogin)

module.exports = router;