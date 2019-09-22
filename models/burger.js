var orm = require("../config/orm");
var selectAll = orm.selectAll;
var insertOne = orm.insertOne;
var updateOne = orm.updateOne;

module.exports = {
    getAll: function (cb) {
        selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertNew: function(name, cb) {
        insertOne("burgers", "burger_name", name, function(res) {
            cb(res);
        })
    },
    updatePrev: function (objColVals, condition, cb) {
        updateOne("burgers", objColVals, condition, function(res) {
            cb(res)
        })
    }
};