const express = require('express');
const router = express.Router();
const mainController = require('../../controllers/api/mainControllerApi')



router.get('/' , mainController.index )


module.exports = router