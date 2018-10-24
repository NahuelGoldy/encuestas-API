const Encuesta = require('../model/encuesta');

exports.post = (req, res) => {
    // TODO: hacer el "new({atributos})" con todos los parametros posta (ver columnas tabla)
    return new Encuesta({edad: req.body.edad})
        .save()
        .then(enc => {
            return enc;
        })
        .catch(err => {
            res.status(500).send(err);
        });
};

exports.getAll = (req, res) => {
    // TODO: ver si el fetchAll funca (debería)
    return Encuesta.fetchAll()
        .then(encuestas => {
            return encuestas;
        })
        .catch(err => {
            res.status(500).send(err);
        });
};