const { loginController, signupController } = require('../controllers/auth');
const log = require('../middlewares/logger');

const router = require('express').Router();
router.post('/login', loginController);
router.post('/signup', signupController);

module.exports = router;