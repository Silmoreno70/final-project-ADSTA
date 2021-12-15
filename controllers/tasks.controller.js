
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

module.exports = {
    create: function (req, res) {
        dogstatsd.increment('tasks.create');
        res.status(201).send();
    },

    getAll: function (req, res) {
        dogstatsd.increment('tasks.getAll');
        res.json([{id: 1, name: 'QA Test App'}]);
    },

    getById: function (req, res) {
        dogstatsd.increment('tasks.getById');
        res.json({id: 1, name: 'QA Test App'});
    }
};
