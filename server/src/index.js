require("dotenv").config()

const express = require('express')
require('../db/conn');
const StudentRouter = require('../src/routers/students');
const EnquiryRouter = require('../src/routers/enquiry');
const UserRouter = require('./routers/users');
const UserProfile = require('./routers/profile');
const app = express()
const port = process.env.PORT || 4000
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken");
const Logout= require("./routers/logout");



app.use(express.json())
app.use(cookieParser())  //cookieParser middleware
//to get form data (remove undefined data)
app.use(express.urlencoded({ extended: false }))
app.use(StudentRouter)
app.use(EnquiryRouter)
app.use(UserRouter)
app.use(UserProfile)
app.use(Logout)





// express router 
// 1. create a new router 
// const router = new express.Router();
// 2. define the router 
// router.get("/sagar", (req, res) => {
//   res.send("hi !");
// })
// 3. we need to register our router 
// app.use(router)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

