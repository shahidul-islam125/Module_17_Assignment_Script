const express = require('express')
const router = express.Router()

//Root Route
router.get("/", (req, res) => {
	res.send("Server is Running")
})




module.exports = router