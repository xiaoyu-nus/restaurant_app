const express = require("express");
const router = express.Router();

const Restaurant = require("../models/Restaurant");

// slash representing the end point
// @route GET restaurant
// @desc Get All Items
// @access Public
router.get("/", (req, res) => {
  Restaurant.find()
    .sort({ name: 1 })
    .then((restaurant) => res.json(restaurant))
    .catch((err) => res.status(400).json("Error: " + err));
});

// @route POST restaurant
// @desc Create A Post
// @access Public
router.post("/add", (req, res) => {
  const newRest = new Restaurant({
    name: req.body.name,
    time: req.body.time,
  });

  router.route("/:id").delete((req, res) => {
    Restaurant.findByIdAndDelete(req.params.id)
      .then(() => req.json("Restaurant deleted from collection."))
      .catch((err) => res.status(400).json("Error: " + err));
  });

  newRest
    .save()
    .then((restaurant) => res.json(restaurant))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
