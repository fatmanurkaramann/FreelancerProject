const Portfolio = require('./../models/Portfolio')

exports.getHomePage = async (req, res) => {
    const portfolios = await Portfolio.find()
    const portfolio = await Portfolio.findById(req.params.id)

    res.render(
        'index',
        {
            portfolios
        }
    )
}