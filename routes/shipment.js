var express = require('express');
var router = express.Router();
var shipmentController = require('../controllers/shipment.controller');
var middleware = require('../middleware');


router.get('/:id', shipmentController.getById);
router.use(middleware);

router.post('/', shipmentController.create)
router.get('/', shipmentController.getAll);


module.exports = router;
