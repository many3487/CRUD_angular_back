const Producto = require("../models/Producto")

//insertar un producto
exports.crearProducto = async (req, res) =>{
    try{
        let producto;
        //creamos el producto
        producto = new Producto(req.body);

        await producto.save();

        res.send(producto);
    }catch(e){
        console.log(e);
        res.status(500).send("hubo un error",escape)
    }
}

//obtener todos los productos
exports.obtenerProductos =async (req,res) => {
    try {
        //realizamos la busqueda a la base de datos
        const productos = await Producto.find();
        res.json(productos)
    }catch(e){
        console.log(e);
        res.status(500).send("Hubo un error",e);
    }
}

exports.actualizarProducto = async (req, res) => {
    try{
        const { nombre, categoria, ubicacion, precio} = req.body;
        let producto = await Producto.findById(req.params.id);

        if (!producto){
            res.status(404).json({msg : 'no existe este producto'});
        }
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate( {_id: req.params.id} , producto, {new:true} );
        res.json(producto);
        
    }catch (e){
        console.log(e);
        res.status(500).send("Ha ocurrido un error",e);
    }
}

exports.obtenerProducto = async (req, res) => {
    try{
        let producto = await Producto.findById(req.params.id);

        if (!producto){
            res.status(404).json({ msg : 'no existe este producto' });
        }
        res.json(producto);
        
    }catch (e) {
        console.log(e);
        res.status(500).send("Ha ocurrido un error",e);
    }
}

exports.eliminarProducto = async (req, res) => {
    try{
        let producto = await Producto.findById(req.params.id);

        if (!producto){
            res.status(404).json({ msg : 'no existe este producto' });
        }
        await Producto.findOneAndRemove({ _id : req.params.id});
        res.json({msg: "El producto ha sido eliminado con exito" });
        
    }catch (e) {
        console.log(e);
        res.status(500).send("Ha ocurrido un error",e);
    }
}
