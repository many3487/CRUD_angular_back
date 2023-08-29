const mongoose = require('mongoose');
require('dotenv').config({path : 'variable.env'})

const conectarDB = async () => {
    try{
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('base de datos conectada');
    }catch(e){
        console.log(e);
        process.exit(1);//se detiene la aplicación
    }
}
module.exports = conectarDB