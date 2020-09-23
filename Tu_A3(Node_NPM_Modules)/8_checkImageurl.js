const isImageUrl = require('is-image-url');

const result1 = isImageUrl('https://timedotcom.files.wordpress.com/2015/08/gettyimages-482708894.jpg?quality=65&strip=color&w=1100');
//=> true

const result2 = isImageUrl('https://images.unsplash.com/photo-1600678217111-a23a045721e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
//=> false

console.log(result1);
console.log(result2);

const requestImageSize = require('request-image-size');

requestImageSize('https://images.unsplash.com/photo-1600678217111-a23a045721e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
    .then(size => console.log(size))
    .catch(err => console.error(err));