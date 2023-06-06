const Portfolio = require('./../models/Portfolio')
const fs = require('fs')

exports.createPortfolio = async (req, res) => {
    try {

        const uploadDir = 'public/uploads'
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir)
        }

        let uploadedImage = req.files.image
        let uploadPath = __dirname + '/../public/uploads/' + uploadedImage.name

        uploadedImage.mv(uploadPath,
            async () => {
                await Portfolio.create({
                    ...req.body,
                    image: '/uploads/' + uploadedImage.name
                })
            })
        res.redirect('/')
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: 'Title must be unique.',
        });
    }

}
exports.editPortfolio= async (req,res)=>{

    const portfolio = await Portfolio.findById(req.params.id)
    const uploadDir = 'public/uploads'

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir)
    } 

    let uploadedImage = req.files.image
    let uploadPath = __dirname + '/../public/uploads/' + uploadedImage.name

    uploadedImage.mv(uploadPath,
        async () => {
            await Portfolio.findByIdAndUpdate(portfolio, {
                title: req.body.title,
                description: req.body.description,
                image: '/uploads/' + uploadedImage.name
              })
        })

       
        await portfolio.save();

      
        res.redirect('/');
    
}