var express = require("express");
var app = express();
const port = process.env.PORT || 3000; 

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//mongoose connect DB
const mongoose = require('mongoose');
const uri = "mongodb+srv://vietbq:vietbq@cluster0.zentx.mongodb.net/OnlineShop?retryWrites=true&w=majority";
mongoose.connect(uri,function(err)
{
    if(err)
    {
        console.log('Connect Fail!');
    }
    else{
        console.log('Connect MongoDB sussces!')
    }
});

// import routes
const departmentRoutes = require('./routes/department');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const shippingRoutes = require('./routes/shipping');
const customerRoutes = require('./routes/customer');
const orderRoutes = require('./routes/order');

// set routes to api
app.use('/api/department', departmentRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/shipping', shippingRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/order', orderRoutes);


app.listen(3000);
// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

app.get("/",function(req,res){
    res.render("home");
});