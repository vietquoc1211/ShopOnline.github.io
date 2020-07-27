var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.listen(3000);

// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ShopOnline', {useNewUrlParser: true, useUnifiedTopology: true},function(err)
{
    if(err)
    {
        console.log('Connect Fail!');
    }
    else{
        console.log('Connect MongoDB sussces!')
    }
});
var Category = require("./Models/Category");

app.get("/",function(req,res){
    res.render("home");
});
app.get("/cate",function(req,res){
    Category.find(function(err,items){
        if(err)
        {
            res.send("error");
        }
        else{
            console.log(items);
            res.render("cate",{Cates:items});
        }
    });
});

app.post("/cate",function(req,res){
    // res.send(req.body.txtCate);
    var newCate = new Category({
        name: req.body.txtCate,
        Books_id: []
    });
    res.json(newCate);
    newCate.save(function(err){
        if(err)
        {
            console.log("Save error:" +err);

        }
        else{
            console.log("Save Succsesfully");
        }
    });
});
