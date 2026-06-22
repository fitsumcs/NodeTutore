const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    const parsedUrl = new URL(req.url, 'http://localhost');
    let fileName = path.join(__dirname, parsedUrl.pathname) + ".html";
    if (parsedUrl.pathname === "/") fileName = path.join(__dirname, '/index.html');


    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("<h1>Page Not Found</h1> ");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();

    });

});

server.listen(8080, () => { console.log("Server is Running at 8080"); });