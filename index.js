const express =  require('express')
const app = express();
const port = 4000;
 

app.use('/',require('./routes'))
app.listen(port,function(err){
    if(err){
        console.log('Error:',err);

    }
    console.log("server is up and running on port:", port)
})
