const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;
const path = require("path");
/* Declarando el moto de vista a usar */
app.set("view engine", "ejs");
app.set("views", "./src/views");

/* Declarando  Middleware */
app.use(express.static("public"));

/* Declararando ubicacion del folder views */

app.set("views", path.resolve(__dirname, "views"));

/* Importamos los endPoints */
const mainRouter = require('./routes/mainRouter')
const apiRouter = require ('./routes/api/apiRouter')

app.listen(PORT , console.log('Servidor en http://localhost:' + PORT));

/* Usando los endPoints */
app.use('/' , mainRouter)
app.use('/api' , apiRouter)