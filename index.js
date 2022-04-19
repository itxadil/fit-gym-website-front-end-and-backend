const express=require("express")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"))
var path = require('path');
//setting home route
app.get("/index.html",function(req,res){
    res.sendFile(__dirname+'/index.html')
})
//setting about route
app.get("/about.html",function(req,res){
    res.sendFile(__dirname+'/about.html')
})
//setting services route
app.get("/services.html",function(req,res){
    res.sendFile(__dirname+'/services.html')
})
//setting register route
app.get("/register.html",function(req,res){
    res.sendFile(__dirname+'/register.html')
})
//setting contact route
app.get("/contact.html",function(req,res){
    res.sendFile(__dirname+'/contact.html')
})

    let na
    let ag
    let gen
    let hei
    let wei
    let add
    let num
    let i
    let bmi
// const mongodb=require("mongodb")
// const assert=require("assert")
// const { MongoClient } = require("mongodb")
// const { stringify } = require("querystring")
// const dbname="fit"
// const client=new MongoClient('mongodb://localhost:27017')
// function finddata(){};

const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/fitmegym")
const schema=new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    height:Number,
    weight:Number,
    address:String,
    contact:String,
    id:Number,
    BMI:Number
})
const collections=mongoose.model("members",schema);

    // const mem=new collections({
    //     name:na,
    //     age:ag,
    //     gender:gen,
    //     height:hei,
    //     weight:wei,
    //     address:add,
    //     contact:num,
    //     id:i,
    //     BMI:bmi
    // })
    // mem.save()

app.post("/register.html",function(req,res){
     na=req.body.in1;
     ag=req.body.in2;
     gen=req.body.gender;
     hei=req.body.in5;
     wei=req.body.in6;
     add=req.body.in7;
     num=req.body.in8;
     i=req.body.in9;
     bmi=req.body.in10;
    const mem=new collections({
        name:na,
        age:ag,
        gender:gen,
        height:hei,
        weight:wei,
        address:add,
        contact:num,
        id:i,
        BMI:bmi
    })
     mem.save()
})
// // const mongodata=function(db,callback){
// //     const collections=db.collection("members");
// //     collections.insertOne({
// //         name:na,age:ag,gender:gen,height:hei,wieght:wei,address:add,number:num,id:i,BMI:bmi
// //         },function(err,result){
// //             assert.equal(err,null)
// //             console.log("Record inserted successfully")
// //             callback(result)
// //         })
// // }

       
// //         client.connect(function(err){
// //             assert.equal(null,err);
// //             console.log("connected successfully to server")
// //             const db=client.db(dbname)
// //             mongodata(db,function(){
// //                 finddata(db,function(){
// //                     client.close()
// //                 })
// //             })
            
           
// //         })
   
//  res.send("<h1>Data inserted</h>")
//  //reading data from database

// })

//reading data
// collections.find(function(err,mem){
//     if(err){
//         console.log(err);
//     }else{
//         mem.forEach(members=>{
//             console.log(members.name + ' '+members.address +' '+members.contact)
//         })
//     }
// })

//  finddata=function(db,callback){
//     const collections=db.collection('members')
//     collections.find({}).toArray(function(err,docs){
//         assert.equal(err,null)
//         console.log("Successfully found")
//         console.log(docs)
//         callback(docs)
//     })
// }
app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' ,function(){
    console.log("Server is up and running on port 3000")
})