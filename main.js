//console.log("hello world");
const http = require("http");

http.createServer((req, res) => {
               res.write("Hello web!");
               res.end();
    }).listen(8080);

