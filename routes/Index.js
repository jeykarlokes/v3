var express             = require("express"),
    router              = express.Router({mergeParams:true}),
    Master_User         = require('../models/User'),
    product_categories  = require('../load-categories');


router.get('/', function(req, res) {
    res.render('landing.ejs');
})
router.get('/home', function (req, res) {
    res.render('home.ejs', {products:product_categories});
})


router.get('/login', function(req, res) {
    res.render('Logins.ejs');
});

router.get('/register',function(req,res)
{
    res.render('Register');

})

router.post('/register',function(req,res)
{
    Master_User.create({firstName:req.body.Fname,
    lastName:req.body.Lname,
    email:req.body.Email,
    password:req.body.Pwd
    },function (err,User)
    {
        if(err){console.log(err);}
        else{
            console.log('user added',User)
            res.redirect('/admin/showuser');
        }
    })

});

module.exports = router;
