const express = require('express')
const pageController = require('../controllers/pageController')
const photoController = require('../controllers/photoController')



const router = express.Router()

router.route('/').get(pageController.getHomePage)
router.route('/photos').post(photoController.createPortfolio)


module.exports = router