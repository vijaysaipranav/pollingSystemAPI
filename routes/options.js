const express = require('express');
const router = express.Router();
const optionsController = require('../controller/options_controller');

router.get('/:id/delete',optionsController.destroy);
router.patch('/:id/add_vote',optionsController.addVote);

module.exports = router;