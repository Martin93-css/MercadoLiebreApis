const db = require('../../db/productos.json')

console.log(db)


const controller = {
    index: (req , res) => {
        res.render('home/index')
    }
}


module.exports = controller