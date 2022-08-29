
const express = require('express')
const router = new express.Router();
const User = require('../models/registeruser');
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const auth = require("../middleware/auth")
// About Auth 
router.post("/logout", auth, async (req, res) => {
    try {
        res.clearCookie('jwt', {path:"/"});
        res.status(200).send('User Logout')
    } catch (e) {
        res.status(400).send(e);
    }
})
module.exports = router;