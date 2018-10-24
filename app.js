const express = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors');
const encuestasRoutes = require('./routes/encuestaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Allow CORS
app.use(cors({origin: '*'}));
app.use(bodyParser.json());

// custom Routes
app.use('/encuesta', encuestasRoutes);

app.use('/hola', (req, res) => {
    res.json('Hola mundo!');
});

// if got to this point, means route error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(PORT, function() {
    console.log('Server listening on port %s.', PORT);
});