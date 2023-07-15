const express = require('express');
const router = express.Router();
const questionController = require('../controller/questions_controller')
const optionsController = require('../controller/options_controller');


router.post('/create',questionController.create);
router.post('/:id/options/create',optionsController.create);
router.get('/:id/delete',questionController.destroy);
router.get('/:id',questionController.display);



module.exports = router;