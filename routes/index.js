const express = require('express');
const router = express.Router();
const questionController = require('../controller/questions_controller')

console.log('Router Loaded');
// implementing questions and options routes
router.get('/',questionController.displayAll)
router.use('/questions',require('./questions'));
router.use('/options',require('./options'));
module.exports = router;