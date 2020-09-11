    module.exports.setFlash = function(req,res,next){

//in locals we will set the flash ,messages. locals template store

        res.locals.flash = {
            'success': req.flash('success'),
            'error': req.flash('error')
        }
        next()
    }