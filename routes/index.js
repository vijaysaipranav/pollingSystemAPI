const express = require('express');
const router = express.Router();

console.log('Router Loaded');
// implementing questions and options routes

router.use('/questions',require('./questions'));
router.use('/options',require('./options'));
module.exports = router;