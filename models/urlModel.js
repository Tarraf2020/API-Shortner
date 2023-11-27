const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: "string",
    required: true,
  },
  urlCode: {
    type: "string",
    required: true,
  },
  shortUrl: {
    type: "string",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("url", urlSchema);
