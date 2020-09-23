const isImageUrl = require('is-image-url');
const url1 = "https://images.unsplash.com/photo-1600678217111-a23a045721e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
const url2 = 'https://timedotcom.files.wordpress.com/2015/08/gettyimages-482708894.jpg?quality=65&strip=color&w=1100';

function check_image1(url) {
    const result1 = isImageUrl(url1);
    console.log(result1);
}


const requestImageSize = require('request-image-size');

async function check_image2(url) {

    try {
        const imageurl = await requestImageSize(url);
        console.log(imageurl);

    } catch (error) {

        console.log("Not Image");

    }

}
//check_image1(url1);
check_image2(url2);