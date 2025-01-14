const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Description: String,
  Date: Number,
  Time: Number,
  Location: String,
  Rulebook: String,
  Registered: { type: Number, default: 0 },
  TeamSize: Number,
  Prize: Number,
  Deadline: Number,
  Cost: Number,
  Banner: String,
  Organizer: String,
  Form: { type: Object },
});

const events = mongoose.model("events", eventsSchema);
module.exports = events;
