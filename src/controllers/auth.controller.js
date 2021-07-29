
//import config from "../config/aliases";
const conn = require("../utils/db");
const queries  = require("../utils/queries");

//Login
const getLogin = async (req, res) => {
  console.log("estas en getLogin");
  const client = await conn.connect();
  const { correo, clave } = req.body;
  
  try {
    //User login
    const response = await client.query(queries.USER_LOGIN, [correo, clave]);

    if (typeof response.rows[0] === "undefined") {

      try {
        // Business login
        const response2 = await client.query(queries.BUSINESS_LOGIN, [correo, clave]);

        if (typeof response2.rows[0] === "undefined") {
          res.status(500).json([
            {
              status: 404,
              messageError: "Ni usuario ni establecimientos encontrados",
             
            },
          ]);
        } else {
          res.status(200).json([
            {
              status: 200,
              messageError: "Establecimiento logueado",
            },
          ], res.status(200).json(response.rows));
        }
      } catch {
        res.status(505);
      } finally {
        client.release(true);
      }

    } else {
      res.status(200).json([
        {
          status: 200,
          messageError: "Usuario logueado",
        },
      ], res.status(200).json(response.rows));
      
    }
    
  } catch {
    res.status(505);
  }
};

module.exports = {
  getLogin,
};
