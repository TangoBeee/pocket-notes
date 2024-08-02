const express = require('express');
const {
  getAllGroups,
  getGroupByName,
  createGroup,
  addNoteToGroup
} = require('../controllers/group.controller');

const router = express.Router();

router.get('/groups', getAllGroups);
router.get('/groups/:groupName', getGroupByName);
router.post('/groups', createGroup);
router.post('/groups/:groupName/notes', addNoteToGroup);

module.exports = router;