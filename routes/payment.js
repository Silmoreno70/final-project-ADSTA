var express = require('express');
var router = express.Router();
var paymentController = require('../controllers/payment.controller');
var middleware = require('../middleware');


//router.use(middleware);

router.get('/promos', paymentController.getPromos);
router.get('/apply-discount', paymentController.applyDiscount);
router.post('/', paymentController.create);

router.use(middleware);

module.exports = router;
