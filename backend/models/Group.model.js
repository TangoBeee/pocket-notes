const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  text: String,
  timestamp: { type: Date, default: Date.now }
});

const groupSchema = new mongoose.Schema({
  name: String,
  color: String,
  notes: [noteSchema]
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
