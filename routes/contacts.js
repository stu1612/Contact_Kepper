const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route   POST api/contacts
// @desc    Add new user contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Add new contact");
});

// @route   PUT api/contacts/:id
// @desc    Change user contact information
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact user
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Remove contact");
});

module.exports = router;
