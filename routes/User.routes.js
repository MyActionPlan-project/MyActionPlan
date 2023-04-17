const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");



// Get user details
router.get("/profile/:userId", isAuthenticated, (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json({ user });
    })
    .catch((err) => {
      console.error(err.message);
      return res.status(500).json({ error: 'Server Error' });
    });
});

//Update user details
router.put("/profile/:userId", isAuthenticated, (req, res) => {
  
  const userId = req.params.userId;
  const updatedUser = req.body;
  User.findByIdAndUpdate(userId, updatedUser, { new: true })
    .then((updatedUser) => {
      return res.status(200).json({ user: updatedUser });
    })
    .catch((err) => {
      console.log(`error updating user: ${err.message}`);
      return res.status(500).json({ error: err.message });
    });
});

//Delete user
router.delete("/profile/:userId", isAuthenticated, (req, res) => {
  const userId = req.params.userId;
  User.findByIdAndDelete(userId)
    .then(() => {
      return res.status(204).send();
    })
    .catch((err) => {
      console.log(`Error deleting user: ${err.message}`);
      return res.status(500).json({ error: err.message });
    });
});



module.exports = router;
