const http = require('http');


const server = http.createServer(
    (req,res)=>{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Hello World This is My First Server..!!!');
        
    }
);

server.listen(8080,()=>{console.log('Server is Running at Port : 8080');})

