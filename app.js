var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

var app = express();

var routes = require("./routes/main");
var users = require("./routes/users");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/",routes);
app.use("/users", users)

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost:27017/start');

// DEFINE MODEL
var User = require('./models/user');

// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});
