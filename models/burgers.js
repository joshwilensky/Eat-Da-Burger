var orm = require('../config/orm.js');

// simplify and streamline orm functions for our burger model
var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (nameInput, cb) {
    orm.insertOne("burgers", nameInput, function (res) {
      cb(res);
    });
  },
  updateOne: function (burgerId, cb) {
    orm.updateOne("burgers", burgerId, function (res) {
      cb(res);
    });
  },
  deleteOne: function (burgerId, cb) {
    orm.deleteOne("burgers", burgerId, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;