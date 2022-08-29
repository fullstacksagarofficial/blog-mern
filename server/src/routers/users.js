const express = require("express");
const router = new express.Router();
const User = require("../models/registeruser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//create a new users
router.post("/users", async (req, res) => {
  try {
    const users = new User(req.body);
    const token = await users.generateAuthToken();
    // set cookie
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 90000), //set cookie for 9 min
      httpOnly: true,
    });
    const createUser = await users.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(401).send(e);
  }
});

// user login
router.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const checkusername = await User.findOne({ username: username });
    // compare bcrypt password
    const passwordMatch = await bcrypt.compare(
      password,
      checkusername.password
    );
    const token = await checkusername.generateAuthToken();
    // set cookie
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 90000), //set cookie for 9 min
      httpOnly: true,
      // secure:true   apply only on htpps:connection
    });
    if (passwordMatch) {
      return res.status(200).json({ success: true });
    } else {
      return res
        .status(401)
        .json({ success: false, msg: "invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, msg: "Server error" });
  }
});

// fetch users
router.get("/users", async (req, res) => {
  try {
    const usersData = await User.find();
    res.status(200).send(usersData);
  } catch (e) {
    res.status(400).send(e);
  }
});

// fetch individual users
router.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const UserData = await User.findById(_id);
    res.send(UserData);
  } catch (e) {
    res.status(404).send(e);
  }
});

// update User by ID
router.patch("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUserData = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateUserData);
  } catch (e) {
    res.status(404).send(e);
  }
});

// delete User by ID
router.delete("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(_id);
    if (!_id) {
      return res.status(404).send();
    }
    res.send(deleteUser);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
