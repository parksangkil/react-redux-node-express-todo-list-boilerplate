const knex = require('../../../knex/db_connect');

module.exports = (req, res) => {
    return knex('todos');
};