const express = require('express');

const controller  = require('../controllers/schoolController');

const router = express.Router();

router.get('/', controller.getAllSchools);
router.post('/new-school', controller.registerSchool);
router.get('/detalhes-escola/:id', controller.getSchool);
router.delete('/delete-school/:id', controller.deleteSchool);
router.put('/edit-school/:id', controller.updateSchool);

module.exports = router;
