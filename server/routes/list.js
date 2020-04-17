const express = require("express");
const router = express.Router();

const List = require("../models/List");

// slash representing the end point
// @route GET list
// @desc Get All Items
// @access Public
router.get("/", (req, res) => {
  List.find()
    .sort({ name: 1 })
    .then((list) => res.json(list))
    .catch((err) => res.status(400).json("Error: " + err));
});

// @route POST list
// @desc Create A Post
// @access Public
router.post("/add", (req, res) => {
  const newList = new List({
    listName: req.body.listName,
    userID: req.body.userID,
    restaurants: [],
  });

  newList
    .save()
    .then((list) => res.json(list))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update:id").post((req, res) => {
  List.findById(req.params.id)
    .then((list) => {
      list.listName = req.body.listName;
      list.userID = req.body.userID;
      list.restaurants = req.body.restaurants;

      list
        .save()
        .then(() => res.json("List updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
