var express             = require('express'),
    app                 = express(),
    mongoose            = require('mongoose'),
    bodyParser          = require('body-parser'),
    Item                = require('./models/Item'),
    Order               = require('./models/Order'),
    Master_User         = require("./models/User"),
    Fashion_items       = require("./sample-items.js"),
    Cart                = require('./models/Cart'),
    UserDetail          = require("./models/UserDetail"),
    product_categories  = require('./load-categories');


app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27018/Shop_v3', {useNewUrlParser: true, useUnifiedTopology: true});
app.set('view engine','ejs');


var adminRoute      = require('./routes/Admin');
var cartRoute       = require("./routes/Cart");
var fashionRoute    = require('./routes/Fashion')
var userRoute       = require("./routes/User");
var indexRoute      = require("./routes/Index");
var seedRoute       = require("./routes/SeedDB");


app.use("/",indexRoute);
app.use("/seed",seedRoute);
app.use("/admin",adminRoute);
app.use("/user/:name",userRoute);
app.use("/fashions",fashionRoute);


//  below are the some common routes


// var lokesh = 12;

// app.get(`/sd/:${lokesh}`,function (req,res)
// {
//     res.send(`${req.params}`);
// })

//  below are the sedding items





app.listen(process.env.PORT, process.env.IP, function ()
{
    console.log('server started SuccessFully !!');

});
