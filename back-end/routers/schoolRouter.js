const express = require('express');

const controller  = require('../controllers/schoolController');

const router = express.Router();

router.get('/', controller.getAllSchools);

module.exports = router;
