const db = require('../../db/productos.json');

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


  
}

};

module.exports = controller;
