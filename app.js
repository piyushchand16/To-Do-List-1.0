const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");


const app=express();

var items=["Do Workout","Take a good Diet","Study Hard"];
var workitems=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/",function(req,res){
    // res.send("Hello");
    let day=date();
    res.render("list",{listTitle:day,newItemadd:items});
});

app.post("/",function(req,res){
    item=req.body.newItem;
    if(req.body.list==="Work"){
        workitems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newItemadd:workitems});
});
app.get("/about",function(req,res){
    res.render("about");
})

app.post("/work",function(req,res){
    let item=req.body.newItem;
    workitems.push(item);
    res.redirect("/work");
})


app.listen(3000,function(){
    console.log("Server started on port 3000");
});
