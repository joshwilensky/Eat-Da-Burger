// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  // select all function, used to display burgers
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // insert function, used when a burger is created
  insertOne: function (tableInput, burgerNameInput, cb) {
    var queryString = "INSERT INTO " + tableInput + " (burger_name) VALUES ('" + burgerNameInput + "');";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // update function, used when 'eating' a burger
  updateOne: function (tableInput, burgerIdInput, cb) {
    var queryString = "UPDATE " + tableInput + " SET devoured=TRUE WHERE id='" + burgerIdInput + "';";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // delete function, used with the delete buttons
  deleteOne: function (tableInput, burgerIdInput, cb) {
    var queryString = "DELETE FROM " + tableInput + " WHERE id='" + burgerIdInput + "';";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
module.exports = orm;