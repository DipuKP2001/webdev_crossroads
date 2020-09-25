var express = require('express')
var router = express.Router()

router.get('/',(req,res,next)=>{
    const names = ['Dilshad',"Nikhil","kilivayil"]
    const object = {
        name:"obj",
        admin: true,
    }
    res.render('about', {object});
});

module.exports = router