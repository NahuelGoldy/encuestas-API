
const express = require('express');
const router = express.Router();
const Encuesta = require('../controllers/encuestaController');

router.post('/', (req, res, next) => {
    Encuesta.post(req, res)
        .then(enc => {
            res.json(enc);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});

router.get('/', (req, res, next) => {
    Encuesta.getAll(req, res)
        .then(encs => {
            res.json(encs);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});

module.exports = router;