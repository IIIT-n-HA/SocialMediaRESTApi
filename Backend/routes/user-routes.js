const express = require("express");
const {
  getAllUsers,
  signup,
  login,
} = require("../controllers/user-controller");
const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", signup);
userRoutes.post("/login", login);

module.exports = userRoutes;
