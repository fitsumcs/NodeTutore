const isImageUrl = require('is-image-url');
const requestImageSize = require('request-image-size');

//urls
const url1 = "https://images.unsplash.com/photo-1600678217111-a23a045721e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
const url2 = 'https://s3.amazonaws.com/thinkific-import/116598/GaIykx9yR2GRamtdOamF_imac.png';

// fun 1 
function check_image1(url) {
    const result1 = isImageUrl(url1);
    console.log(result1);
}


// fun 2 
async function check_image2(url) {

    try {
        const imageurl = await requestImageSize(url);
        console.log(imageurl);
        if (imageurl && imageurl.type === 'svg') {
            console.log("Not Image");
        }

    } catch (error) {

        console.log("There is No Image");

    }

}

//Testing 
//check_image1(url1);
check_image2(url2);