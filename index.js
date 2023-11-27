const express = require("express");
const app = express();
const DB = require("./database").connectDB; // we are only refering to it

// Routes
const urlRouter = require("./routes/urlRoute");

// Connect to our db
DB();

// Middleware
app.use(express.json());
app.use("/api/v1/url", urlRouter);

// listner
app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
