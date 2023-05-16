const express = require('express');
const router = express.Router();
const mainController = require('../../controllers/api/mainControllerApi')



router.get('/' , mainController.index )
router.get('/productos' , mainController.productos )
router.get('/imagen/:id' , mainController.image)


module.exports = router