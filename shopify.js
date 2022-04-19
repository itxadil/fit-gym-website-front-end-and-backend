const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/shopping")
//definging schema
const personschema=new mongoose.Schema({
    name: String,
    age:Number
})
const personcollection=mongoose.model("persons",personschema);

const person=new personcollection({
    name:"Adil",
    age:22
})
person.save()