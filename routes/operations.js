var express = require('express');
var router = express.Router();
var operationController = require('../controllers/operations.controller');
var middleware = require('../middleware');


router.get('/:id', operationController.getById);

router.post('/', operationController.create)
router.get('/', operationController.getAll);

router.use(middleware);

module.exports = router;
