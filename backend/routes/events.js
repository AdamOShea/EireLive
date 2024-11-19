const express = require('express');
const router = express.Router();

const { eventsFromDb } = require('../controllers/events');

router.post('/events-from-db', eventsFromDb);

module.exports = router;