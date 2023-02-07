const router = require('express').Router();
const postRouter = require('./post');
const authRouter = require('./auth');
const log = require('../middlewares/logger');
router.use('/post',postRouter);
router.use('/auth',authRouter);

module.exports = router;