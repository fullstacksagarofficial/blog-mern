
const express = require('express')
const router = new express.Router();
const User = require('../models/registeruser');
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const auth = require("../middleware/auth")
// About Auth 
router.get("/profile", auth, async (req, res) => {
    try {
        res.send(req.userData)
    } catch (e) {
        res.status(400).send(e);
    }
})
module.exports = router;