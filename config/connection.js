// SET UP MYSQL CONNECTION
require("dotenv").config()
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection(process.env.DB_URL);
}

// MAKE CONNECTION
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// EXPORT CONNECTION
module.exports = connection;