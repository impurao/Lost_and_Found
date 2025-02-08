const express = require('express');
const { reportLostItem, reportFoundItem, searchItems } = require('../controllers/itemController');

const router = express.Router();

router.post('/lost', reportLostItem);
router.post('/found', reportFoundItem);
router.get('/search', searchItems);

module.exports = router;