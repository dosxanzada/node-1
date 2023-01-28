const http = require("http");
const fs = require("fs");

http.createServer(function (request, response){
    
    // if (request.url === "/") {
    //     response.end("Home page")
    // } else if(request.url === "/admin"){
    //     response.end("Admin page")
    // } else {
    //     response.end("404");
    // }

    // response.end("Hello world!");

    fs.readFile("index.html", "utf8", function(error, data){
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write(data);
        return response.end();
    });


}).listen(3001, "127.0.0.1", function () {
    console.log("Server is worked");
});