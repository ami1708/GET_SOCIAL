module.exports.home = function(req,res){
    console.log(req.cookies);
    //to change the value of the cookie
    res.cookie('abhisht',24)
    return res.render('home',{
        title: "home"
    });
}
