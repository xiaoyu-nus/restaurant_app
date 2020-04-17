const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const restRouter = require("./routes/restaurant");
const userRouter = require("./routes/user");
const listRouter = require("./routes/list");
const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS"
  );
  res.header("Access-Control-Max-Age", "86400");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  if (res.Method === "OPTIONS") {
    w.WriteHeader(http.StatusOK);
  }
  next();
});

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

// function find(name, query, cb) {
//   mongoose.connection.db.collection(name, function (err, collection) {
//     collection.find(query).toArray(cb);
//   });
// }

app.use("/restaurant", restRouter);
app.use("/user", userRouter);

app.use("/list", listRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);
