const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 4,
  },
  lists: {
    type: Array,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
