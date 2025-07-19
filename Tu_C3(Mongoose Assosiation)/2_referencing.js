const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/association_eg');



const postSchema = new mongoose.Schema({
    title: String,
    content: String
});
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// the User data will look like 
/*{
    username :  "yourmail",
    name : "yourname",
    posts : [{
        id1(123455666) , id2, id3
    }]

}*/

//create user 
// User.create({
//     username: "cs2@gmail.com",
//     name: "Abebe"
// });

//create a post and attach to user created 

// Post.create({
//     title: "New Post 2",
//     content: "This is my second post ,,,,"
// }, (err, post) => {

//     User.findOne({ username: "cs2@gmail.com" }, (err, user) => {
//         if (err) {
//             console.log(err);

//         } else {
//             user.posts.push(post);
//             user.save((err, user) => {
//                 if (err) {
//                     console.log(err);

//                 } else {
//                     console.log(user);
//                 }
//             });

//         }
//     });


// });


// find user with posts 
User.findOne({ username: "cs2@gmail.com" }).populate('posts').exec((err, user) => {
    if (err) {
        console.log(err);

    } else {
        console.log(user);
    }
});