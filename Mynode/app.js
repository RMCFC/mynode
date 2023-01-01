var express = require("express");
var app = express();

app.get("/",function(req,resp)
{
    resp.send("Welcome to acts");
}
)
app.get("/Placement",function(req,resp)
{
    resp.send("Welcome to coupa software");
}
)
app.listen(7000);
console.log("Server is on boys....")