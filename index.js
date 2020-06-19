const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
// Connect database
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost/reduxTodo",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};
connectDB();

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
