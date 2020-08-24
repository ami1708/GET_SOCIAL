const express = require('express');
const app = express();
const cookieParser = require ('cookie-parser')
const port = 2000;

// setting up our layouts
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const { urlencoded } = require('express');
//setting up the middleware
app.use(express.urlencoded())
app.use(cookieParser());

// using the static files 
app.use(express.static('./assets'));
// using the layout
app.use(expressLayouts);
// extract styles and scripts from sub pages to your layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
