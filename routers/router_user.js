const router = require("express").Router()
const User = require('../controllers/user')

router.get("/", User.getAllUsers)
router.post("/register", User.register)
router.post("/login", User.login)

module.exports = router