const jwt = require("jsonwebtoken");
const User = require("../models/registeruser")

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verifyuser = jwt.verify(token, "helloworldmynameissagarkumar");
        const userData = await User.findOne({ _id: verifyuser._id, "tokens.token":token })

        if(!userData){
            throw new Error('User Not Found !');
        }

        req.token=token;
        // to get user data 
        req.userData=userData;
        req.userID=userData._id;
        // console.log(userData);
        next();
    } catch (error) {
        res.status(401).send(error)
        
    }
}

module.exports = auth