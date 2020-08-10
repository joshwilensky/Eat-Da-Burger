// DEPENDENCIES
var express = require("express");
var router = express.Router();

// SET UP BURGERS.JS CONNECTION
var burger = require("../models/burgers.js");

// GET ROUTE
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// POST ROUTE
router.post("/api/burgers", function (req, res) {
  burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function (
    result) {
    res.json({
      id: result.insertId
    });
  });
});

// PUT ROUTE
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
      devoured: req.body.devoured
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// DELETE ROUTE
router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// EXPORT ROUTES FOR SERVER.JS TO USE
module.exports = router;