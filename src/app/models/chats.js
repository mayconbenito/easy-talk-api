const mongoose = require("../../config/mongodb");

const messagesSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.ObjectId, required: true, ref: "Users" },
  reciver: { type: mongoose.Schema.ObjectId, required: true, ref: "Users" },
  data: { type: String, required: true },
  status: { type: String, enum: ["sent", "recived", "read"], required: true },
  type: {
    type: String,
    enum: ["text", "image", "audio", "video"],
    required: true
  },
  createdAt: { type: Date, default: Date.now }
});

const schema = new mongoose.Schema({
  participants: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users" }
  ],
  newestMessage: { type: String, required: true },
  messages: [messagesSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Chats", schema);