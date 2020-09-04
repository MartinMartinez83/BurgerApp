var mysql = require("mysql");
//creating connection to database//
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vatoloco1",
    database: "burgers_db"
});
// console log will let us know if it's connected//
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected ad id " + connection.threadId);
});
//export module//
module.exports = connection;


