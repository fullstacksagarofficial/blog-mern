const mongoose = require("mongoose");
const validator = require("validator");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//generating token on register

usersSchema.methods.generateAuthToken = async function () {
  try {
    const token = jsonwebtoken.sign(
      { _id: this._id.toString() },
      "helloworldmynameissagarkumar"
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    res.send("the error part" + error);
  }
};

//used in bcryptjs to hash password
usersSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const user = mongoose.model("myuser", usersSchema);
user.createIndexes();
module.exports = user;
