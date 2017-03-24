var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require('./models/post');
var User = require('./models/user');


// POST - title, content
// var postSchema = new mongoose.Schema({
//     title:String,
//     content:String
    
// })

// var Post = mongoose.model("Post", postSchema)



// USER - email, name
// var userSchema = new mongoose.Schema({
//     email:String,
//     name:String,
//     posts:
//     [
//         {   type:mongoose.Schema.Types.ObjectId,
//             ref:"Post"
//         }
//     ]
// })

// var User = mongoose.model('User',userSchema)

// user.create({
//     email:"killer@naver.com",
//     name:"Killer MINE"
    
// })

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

// User.findOne({name:"Daeen"}, function(err,user){
//     if(err){
//         console.log(err)
//     }else{
//         // console.log(user)
//         user.posts.push({
//             title:"THree things that i hate",
//             content:"Harry potter"
//         })
//         user.save(function(err,user){
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(user)
//             }
//         })
//     }
// })

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



// This is creating ...
// Post.create({
//     title:"Please work..",
//     content:"NNNNNNNN"
// }, function(err,data){
//     User.findOne({email:"jenny@naver.com"}, function(err, Userdata){
//         if(err){
//             console.log(err)
//         }else{
//             Userdata.posts.push(data)
//             Userdata.save(function(err,data2){
//                 if(err){
//                     console.log(err)
//                 }else{
//                     console.log("done")
//                     console.log(data2)
//                 }
                
//             })
//         }
        
//     })
    
     
// })

// User.findOne({email:"jenny@naver.com"}).populate("posts").exec(function(err, user){
//   if(err){
//       console.log(err)
      
//   }else{
//       console.log("done")
//       console.log(user)
//   }
// });