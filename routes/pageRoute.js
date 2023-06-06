const express = require('express')
const pageController = require('../controllers/pageController')
const photoController = require('../controllers/photoController')



const router = express.Router()

router.route('/').get(pageController.getHomePage)
router.route('/photos').post(photoController.createPortfolio)
router.route('/contact').post(pageController.sendEmail)
router.route('/:id').get(pageController.getEditPage)
router.route('/:id').put(photoController.editPortfolio)


module.exports = router