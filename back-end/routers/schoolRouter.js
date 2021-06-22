const express = require('express');

const controller  = require('../controllers/schoolController');

const router = express.Router();

router.get('/', controller.getAllSchools);
router.post('/new-school', controller.registerSchool);

module.exports = router;
