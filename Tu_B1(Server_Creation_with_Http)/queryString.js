// Working with query string 
const http = require('http');
const server = http.createServer(
    (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let rurl = req.url;
        const parsedUrl = new URL(rurl, 'http://localhost');
        let name = parsedUrl.searchParams.get('name');
        res.write(`<h1>The URL Navigated : ${rurl}</h1>`); //Printing the URL 
        res.write(`<h1>Your Name : ${name}</h1>`); //Printing the Name from query string  E.g /?name=Abebe
        res.end();

    }
);

server.listen(8080, () => { console.log('Server is Running at Port : 8080'); });