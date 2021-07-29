const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const businessRoutes = require("./routes/business.routes");
const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");

//inicializaciones
const server = express();

//Middlewares
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api/business', businessRoutes);
server.use('/api/products', productRoutes);
server.use('/api/users', userRoutes);
server.use('/api/login', authRoutes);

module.exports = server;