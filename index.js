const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
// Setup middlewares
// app.get("/", (req, res) => res.send("API running"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => res.send("API running"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);
require("./services/passport");
// Connect database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reduxTodo", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
app.listen(PORT);
