const express = require('express');
const fileUpload = require('express-fileupload');
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const pageRoute = require('./routes/pageRoute')

const app = express();

mongoose.connect('mongodb://localhost/frelancer-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Db connected')
})
    .catch((error) => {
        console.error(error);
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(fileUpload())
app.use(express.json())
app.set("view engine", "ejs");


app.use('/', pageRoute)


const port = 3000
app.listen(port, () => {
    console.log('3000 portunda başladı')
})