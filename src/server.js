const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const businessRoutes = require("./routes/business.routes");
const productRoutes = require("./routes/product.routes");

//inicializaciones
const server = express();

//Middlewares
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//rutas
/*
server.use(require('./routes/users.routes'));

server.use(require('./routes/tasks.routes'));
*/

server.use('/api/usuarios', businessRoutes);
server.use('/api/tareas', productRoutes);

module.exports = server;