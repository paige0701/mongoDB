var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
        name:String,
        age:Number,
        temper:String
    })
    
var Cat = mongoose.model("Cat", catSchema);

// adding a new cat into the DB

// var ben = new Cat({
//     name:"Din",
//     age:11,
//     temper:"Bad"
    
// })

// ben.save(function(err,cat){
    
//     if(err){
//         console.log('something went wrong')
//     }else{
//         console.log('saved')
//         console.log(cat)
//     }
    
// })

Cat.create({name:"SnowWhite", age:4, temper:"Alright"}, function(err,cats){
    if(err){
        console.log("errrrr");
    }else{
        console.log(cats)
    }
    
})

// retrieve all cats from the DBne


Cat.find({}, function(err, cat){
    
    if(err){
        console.log('theres errrrorr');
    }else{
        console.log('success')
        console.log(cat)
    }
})