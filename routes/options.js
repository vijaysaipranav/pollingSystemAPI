const express = require('express');
const router = express.Router();
const optionsController = require('../controller/options_controller');

//  the routes are used to delete and add a vote to a option
router.get('/:id/delete',optionsController.destroy);
router.get('/:id/add_vote',optionsController.addVote);

module.exports = router;