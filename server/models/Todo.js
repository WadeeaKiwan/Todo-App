const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true,
      default: false
    },
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
