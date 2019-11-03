const express = require("express");
const router = express.Router();

// @route GET /api/contacts
// @desc  Get all users contacts
// @access Private

router.get("/", (req, res) => {
  res.send("Get all users contacts");
});

// @route Post /api/contacts
// @desc  Add new Contact
// @access Public

router.post("/", (req, res) => {
  res.send("Add new contact");
});

// @route Put /api/contacts/:id
// @desc  Update contact
// @access Private

router.put("/:id", (req, res) => {
  res.send("Update Contact");
});

// @route Delete /api/contacts/:id
// @desc  Delete a contact
// @access Public

router.delete("/:id", (req, res) => {
  res.send("delete a contact");
});

module.exports = router;
