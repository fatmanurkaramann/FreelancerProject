const express = require('express');
const ejs = require('ejs')
const mongoose = require('mongoose')
const pageRoute=require('./routes/pageRoute')

const app = express();


app.use(express.static('public'))
app.set("view engine", "ejs");


app.use('/',pageRoute)


const port = 3000
app.listen(port, () => {
    console.log('3000 portunda başladı')
})