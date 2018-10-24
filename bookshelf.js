const env = process.env.NODE_ENV || 'development';
const dbConfig = require('./knexfile')[env];
const knex = require('knex')(dbConfig);

module.exports = require('bookshelf')(knex);
