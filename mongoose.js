const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/myfruits")
const schema=new mongoose.Schema({
    name:String,
    price:Number,
   review:{
       type:Number,
       min:1,
       max:5
   }
})

const collections=mongoose.model("fruits",schema);
const fruit=new collections({
    name:"Watermellon",
    price:500,
    review:3
})
const Personschema=new mongoose.Schema({
    name:{type:String,required:true},
    age:Number,
    favouriteFruit:schema
})

const Person=mongoose.model("persons",Personschema)
const person=new Person({
    name:"Adil",
    age:22,
    favouriteFruit:fruit
})
//person.save()
Person.find(function(err,person){
    if(err){
        console.log(err)
    }else{
        person.forEach(item=>{
            console.log(item.name+' '+item.favouriteFruit.name)
        })
    }
})

//reading data

// collections.find(function(err,fruits){
//     if(err){
//         console.log(err)
//     }else{
//         fruits.forEach(item=>{
//              console.log(item.name)
//         })
//     }
// })

//updating data

// collections.updateOne({_id:"624bcf4477f29bfb74c4be10"},{price:50},function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Updated!")
//     }
// })

//deleting document
// collections.deleteOne({name:"Apple"},function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Record deleted!")
//     }
// })

//embedding




