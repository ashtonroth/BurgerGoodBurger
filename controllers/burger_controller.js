var express = require("express");

var router = express.Router();

var burgers = require("../models/burger");



// Routes
// =============================================================
module.exports = function(router) {

  // GET route for getting all of the todos
  router.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    burgers.findAll({}).then(function(Burgers) {
      // We have access to the todos as an argument inside of the callback function
      res.json(Burgers);
    });

  });

router.post("/api/burgers", function(req, res) {
   burgers.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
};

