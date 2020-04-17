const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { collection: "hours" }
);

module.exports = Item = mongoose.model("Restaurant", RestaurantSchema);
