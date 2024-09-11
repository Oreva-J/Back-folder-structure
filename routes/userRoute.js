// All user endpoints is define here

const express = require("express")
const { registerUser, registerAdmin } = require("../controllers/userController")

const router = express.Router()

// user route
router.post("/register", registerUser)

// admin router
router.post("admin", registerAdmin)






module.exports = router