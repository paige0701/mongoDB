var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blog_demo");


// POST - title, content
var postSchema = new mongoose.Schema({
    title:String,
    content:String
    
})

var Post = mongoose.model("Post", postSchema)



// USER - email, name
var userSchema = new mongoose.Schema({
    email:String,
    name:String,
    posts:[postSchema]
})

var User = mongoose.model('User',userSchema)


// var newUser = new User({
//     email:"love_daeen@gmail.com",
//     name:"Daeen"
// })

// newUser.posts.push({
//     title:"How to brew potion",
//     content:"Go to potion class"
// })


// newUser.save(function(err,hello){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(hello)
//     }
// })

User.findOne({name:"Daeen"}, function(err,user){
    if(err){
        console.log(err)
    }else{
        // console.log(user)
        user.posts.push({
            title:"THree things that i hate",
            content:"Harry potter"
        })
        user.save(function(err,user){
            if(err){
                console.log(err)
            }else{
                console.log(user)
            }
        })
    }
})

// var newPost = new Post({
//     title:"This is the first post",
//     content:"I am writing this to test if this thingy works lol "
// })

// newPost.save(function(err,newp){
//     if(err){
//         console.log(err)
        
//     }else{
//         console.log(newp)
//     }
// })



