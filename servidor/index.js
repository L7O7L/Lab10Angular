const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
app.use('/api/user', require('./routes/usuario'));



app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})