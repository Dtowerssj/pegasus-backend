import jwt from "jsonwebtoken";
import config from "../config/aliases";
import { Request, response, Response } from "express";
import { conn } from "../utils/db";
import queries from "../utils/queries";
import { QueryResult } from "pg";
import { compare } from "bcryptjs";

//Login
export const getLogin = async (req, res) => {
  const client = await conn.connect();
  console.log("hola");
  try {
    const { correo, clave } = req.body;
    const response = await client.query(queries.GET_LOGIN, [correo, clave]);

    if (typeof response.rows[0] === "undefined") {
      res.status(200).json([
        {
          status: 404,
          messageError: "Usuario no encontrado",
        },
      ]);
    } else {
      res.status(200).json(response.rows);
    }
    console.log("login hecho");
  } catch {
    res.status(505);
  } finally {
    client.release(true);
  }
};

module.exports = {
  getLogin,
};
