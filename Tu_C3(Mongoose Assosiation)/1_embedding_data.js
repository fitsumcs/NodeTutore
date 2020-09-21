const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/association_eg', { useNewUrlParser: true, useUnifiedTopology: true });



const postSchema = new mongoose.Schema({
    title: String,
    content: String
});
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    posts: [postSchema]
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// the User data will look like 
/*{
    username :  "yourmail",
    name : "yourname",
    posts : [{
        title "some title",
        content : "some content"
    }]

}*/

// create user 
const newUser = new User({
    username: "cs@gmail.com",
    name: "Kebede"
});

newUser.posts.push({
    title: "New Post ",
    content: "This is how to make 1 to m relationship"
});
newUser.save((error, user) => {
    if (error) {
        console.log(error);

    } else {
        console.log(user);
    }
});