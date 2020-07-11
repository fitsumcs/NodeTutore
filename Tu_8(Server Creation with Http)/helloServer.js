const http = require('http');


// const server = http.createServer(
//     (req,res)=>{
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end('Hello World This is My First Server..!!!');
        
//     }
// );
const server = http.createServer(
    (req,res)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Hello World This is My First Server..!!!</h1>');
        
    }
);

server.listen(8080,()=>{console.log('Server is Running at Port : 8080');})

