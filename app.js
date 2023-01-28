const { urlencoded } = require("express");
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public"));
const urlencodedParser = express.urlencoded({extended: false});

app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname+"/index.html"));
});

app.post("/", urlencodedParser, function(request, response){
    let result = "";

    let username = request.body.username;
    let password = request.body.password;

    if (username === "admin") {
        if (password === "123") {
            response.redirect("/admin.html")
        } else {
            result = "password error"
        }
    } else {
        response.send("error")
    }

});



app.get("/admin", function (request, response) {
    response.send("<h2>Admin page</h2>");
});

app.listen(3000, function () {
    console.log("Server is worked");
});
