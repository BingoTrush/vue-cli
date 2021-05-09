var http = require("http");
var path = require('path')
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile(path.join(path.resolve(__dirname, '..') + "/index.html"), "utf-8", (err, data) => {
        console.log(err)
        if (err) {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.end("Not Found!");
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    });
}).listen(8000, "127.0.0.1", () => {
    console.log(path.join(path.resolve(__dirname, '..') + "index.html"))
    console.log("Listening at localhost:8000")
    console.log("Run Successfully");
});