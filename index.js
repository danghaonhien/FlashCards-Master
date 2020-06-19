const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
// Connect database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reduxTodo", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
// app.get("/", (req, res) => res.send("API running"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Setup middlewares
app.use(routes);
require("./services/passport");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client,build,index.html"));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT);
