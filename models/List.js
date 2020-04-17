const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  listName: {
    type: String,
    required: true,
    trim: true,
  },
  userID: {
    type: String,
  },
  restaurants: {
    type: Array,
    required: true,
  },
});

module.exports = List = mongoose.model("lists", ListSchema);
