const mongoose = require("mongoose");

const wantBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },

  //   user: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "User",
  //     required: true,
  //   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("WantBook", wantBookSchema);
