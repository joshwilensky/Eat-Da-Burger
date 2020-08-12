// import packages
var express = require('express');
var router = express.Router();

// import model for its functions
var burger = require('../models/burgers.js');

// create routes and logic
router.get("/", function (req, res) {
  burger.selectAll(function (receivedData) {
    var handlebarsObject = {
      burgers: receivedData
    };
    console.log(handlebarsObject);
    res.render('index', handlebarsObject);
  })
});

// handling post request
router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    req.body.name,
    function (result) {
      // Send back the ID of the new quote
      res.json({
        id: result.insertId
      });
    });
});

// handling put request
router.put("/api/burgers/:id", function (req, res) {
  var id = req.params.id;

  console.log("id: " + id);

  burger.updateOne(id, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// handling delete request
router.delete("/api/burgers/:id", function (req, res) {
  var id = req.params.id;

  console.log("id: " + id);

  burger.deleteOne(id, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;