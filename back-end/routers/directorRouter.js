const express = require('express');

const controller  = require('../controllers/directorController');

const router = express.Router();

router.get('/all-directors', controller.getAllDirectors);

module.exports = router;
