const express = require('express');

const controller  = require('../controllers/userController');

const router = express.Router();

router.post('/login-director', controller.loginDirector);
router.post('/login-teacher', controller.loginTeacher);
router.post('/register-user', controller.registerUser);

module.exports = router;
