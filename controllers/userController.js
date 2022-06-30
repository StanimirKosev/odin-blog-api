const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const sign_up_post = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) {
      return next(err);
    }
    new User({
      username: req.body.username,
      password: hashedPassword,
    }).save((err) => {
      if (err) {
        return next(err);
      }
      res.json({
        msg: "Account created",
      });
    });
  });
};

const login_post = (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: "Incorrect username." });
    }

    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (result) {
        jwt.sign({ user }, process.env.SECRET_KEY, (err, token) => {
          res.json({ token, user });
        });
      } else {
        return next(null, false, { message: "Incorrect password." });
      }
    });
  });
};

const verify_token = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    req.token = bearerHeader.split(" ")[1];

    jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
      if (err) {
        return next(err);
      } else {
        res.json({ authData });
      }
    });
  } else {
    res.json({
      message: "You are not verified!",
    });
  }
};

module.exports = { login_post, verify_token, sign_up_post };
