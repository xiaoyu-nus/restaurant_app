const express = require("express");
const router = express.Router();

const User = require("../models/User");

// slash representing the end point
// @route GET user
// @desc Get All Items
// @access Public
router.get("/", (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

// @route POST user
// @desc Create A Post
// @access Public
router.post("/add", (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    lists: [],
  });

  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.userName = req.body.userName;
      user.lists = req.body.lists;

      user
        .save()
        .then(() => res.json("User updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
