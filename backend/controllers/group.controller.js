const Group = require('../models/Group.model');
const moment = require('moment');

const formatNote = (note) => {
  const formattedDate = moment(note.timestamp).format('D MMM YYYY');
  const formattedTime = moment(note.timestamp).format('hh:mm A');
  
  return {
    note: note.text,
    date: formattedDate,
    time: formattedTime,
  };
};

const getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();

    const formattedGroups = groups.map(group => ({
      ...group.toObject(),
      notes: group.notes.map(formatNote),
    }));

    res.json(formattedGroups);
  } catch (err) {
    res.status(500).send({
      error: err.message,
      ok: false,
    });
  }
};

const getGroupByName = async (req, res) => {
  const { groupName } = req.params;

  try {
    const group = await Group.findOne({ name: groupName });
    if (!group) {
      return res.status(404).send('Group not found');
    }

    const formattedGroup = {
      name: group.name,
      color: group.color,
      notes: group.notes.map(formatNote),
    };

    res.json(formattedGroup);
  } catch (err) {
    res.status(500).send({
      error: err.message,
      ok: false,
    });
  }
};

const createGroup = async (req, res) => {
  const { name, color } = req.body;
  const group = new Group({ name, color });

  try {
    const savedGroup = await group.save();
    res.status(201).json(savedGroup);
  } catch (err) {
    res.status(400).send({
        error: err.message,
        ok: false,
      });
  }
};

const addNoteToGroup = async (req, res) => {
  const { groupName } = req.params;
  const { text } = req.body;
  const timestamp = new Date();
  
  try {
    const group = await Group.findOne({ name: groupName });
    if(!group) {
      return res.status(404).send({
        error: "Group not found",
        ok: false,
      });
    }
    
    group.notes.push({ text, timestamp });
    await group.save();


    const formattedGroup = {
      name: group.name,
      color: group.color,
      notes: group.notes.map(formatNote),
    };

    res.status(201).json(formattedGroup);
  } catch (err) {
    res.status(400).send({
        error: err.message,
        ok: false,
      });
  }
};

module.exports = {
  getAllGroups,
  getGroupByName,
  createGroup,
  addNoteToGroup
};
