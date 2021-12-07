const express = require ('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/user/:id',apiController.details);
router.get('/user', apiController.getAll);
router.post('/user',apiController.create);

module.exports = router;