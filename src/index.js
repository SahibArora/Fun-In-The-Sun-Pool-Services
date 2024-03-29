// nodejs modules
const path = require('path')

// npm modules
var express = require('express')
var app = express()
var hbs = require('hbs')
var bodyParser = require('body-parser')
const {sendEmail} = require('./email/account.js')

// // Database Connection
// require('./db-connection/mongoose')

// Diferent application routers
/*const userRouter = require('./routers/user')*/

app.use(bodyParser.urlencoded({
    extended: true
})) // For understanding form data

app.use(express.json())
//app.use(userRouter)

// local variables 
var port = process.env.PORT || 8000 // fetching global variable to local

const publicDirPath = path.join(__dirname,'../public'); // locating the public directory, used for static stuff
const viewDir = path.join(__dirname,'../templates/views'); // locating view directory used by handlebars (hbs) to locate its files to render
const partialsPath = path.join(__dirname,'../templates/partials'); // locating partial directory again used by handlebars again.

app.set('views',viewDir); //telling express, where to find views directory #Bridge
app.set('view engine','hbs'); // needed to set-up to let express know which engine are we using and also for hbs, all the content is supposed to go in views folder!
hbs.registerPartials(partialsPath); // register hbs partials    

// middlewares used by express to render client side javaScript, CSS and pictures
app.use(express.static(publicDirPath)); // giving express access to our static files

//  App Routes works from here ...
app.get('/', (req,res) => {
    res.render('index',{}) // telling express to look for welcome.hbs and {} - means sending no data
})

app.post('/requestQuote', async (req,res)=>{
    res.redirect('/')
    sendEmail(req.body)
})

app.get('*',(req,res)=>{
    res.render('404', {});
});

// Making Server listen to specific port.

app.listen(port, ()=>{
    console.log('Server listening at port ' + port)
})