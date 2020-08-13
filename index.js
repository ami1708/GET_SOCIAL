const express =  require('express')
const app = express();
const port = 4000;
app.use('/',require('./routes'))
// setting up our view engine
app.set ('view engine','ejs');
app.set('views','./views');



app.listen(port,function(err){
    if(err){
        console.log('Error:',err);

    }
    console.log("server is up and running on port:", port)
})
