const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRoutes = require("./routes/users.routes");
const tasksRoutes = require("./routes/tasks.routes");

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

server.use('/api/usuarios', usersRoutes);
server.use('/api/tareas', tasksRoutes);

module.exports = server;