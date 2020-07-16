const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        console.log(`....Incoming Request : ${req.url}`);
        res.end();

    });

});

server.listen(8080, () => { console.log("Server is Running at 8080"); });