// EXPRESS
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')

const app = express();
// const router = express.Router();

// TEMPLATES
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// STATIC FILES
const static_path = path.join(__dirname, "../assets")
console.log('Static files from', static_path)
app.use("/assets", express.static(static_path) )

// CALL ROUTERS FUNCTION
const index = require('./routes/index');


app.use('/', index);



app.use(function (req, res, next) {
    res.status(404).send("")
})

module.exports = app; 