const express = require('express');
const conectarDB = require('./config/db');

//Creo el servidor
const app= express();

//conectamos ala base de datos
conectarDB();

app.listen(port =4000, () => {
    console.log('corriendo el servidor ','http://localhost:'+port)
});

//leer json
app.use(express.json());

//importar ruta de routes
app.use('/api/productos', require('./routes/producto'));