
var Category = require("../models/Category");

// app.post("/cate",function(req,res){
//     // res.send(req.body.txtCate);
//     var newCate = new Category({
//         name: req.body.txtCate,
//         Books_id: []
//     });
//     res.json(newCate);
//     newCate.save(function(err){
//         if(err)
//         {
//             console.log("Save error:" +err);

//         }
//         else{
//             console.log("Save Succsesfully");
//         }
//     });
// });

const GetCategories = (request, response) => {
    try {
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
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
} 

const category = {
    GetCategories
};

module.exports = category;