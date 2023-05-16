const db = require('../../db/productos.json');
const path = require('path');


 const controller = {
    index: (req, res) => {
        res.redirect("http://localhost:3005/api/productos");
      }
      
  ,  
  productos: (req, res) => {
    const db = require('../../db/productos.json');

    let productos = db.map(producto => {
        return {
            id: producto.id,
            name: producto.nombre,
            price: producto.precio,
            discount: producto.descuento,
            image: producto.imagen

        }
    })

    let respuestaProducto = productos; 

    let respuesta = {
        meta: {
          status: 200,
          url: "http://localhost:3005/api/productos"
        },
        data: respuestaProducto
   
  }

  res.json(respuesta)


  
},
image: (req , res) => {
 const nombreImagen = req.params.id;
 const rutaImagen = path.join(__dirname, '../../../public/img', nombreImagen + '.jpg');

  // Envía la imagen como respuesta
  res.sendFile(rutaImagen);
}

};

module.exports = controller;
