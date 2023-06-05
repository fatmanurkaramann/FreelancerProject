const mongoose = require("mongoose");
const Schema = mongoose.Schema
const PortfolioSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String,
        unique: true
    },
    image: {
        type: String,
    }
})

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);
module.exports = Portfolio