const bookshelf = require('../bookshelf');

const Encuesta = bookshelf.Model.extend({
        tableName: 'encuestas',
    }
);

module.exports = Encuesta;
