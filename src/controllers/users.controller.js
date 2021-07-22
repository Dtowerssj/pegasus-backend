const conn = require("../utils/db");
const queries = require("../utils/queries");
//import { genSaltSync, hashSync } from 'bcryptjs';

const getUsuarios = async (req, res) => {
  //console.log("estas en get users");
  const client = await conn.connect();
  try {
    const response = await client.query(queries.GET_USERS);
    return res.status(200).json(response.rows);
  } catch {
    res.status(505);
}finally{
  client.release(true);
}
};

const getUsuariobyId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await conn.query(queries.GET_USER_BY_ID, [id]);
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const createUsuario = async (req, res) => {
  const { nombre, usuario, correo, clave } = req.body;

  try {
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(clave, salt);
    const response = await conn.query(queries.INSERT_USER, [
      nombre,
      usuario.toLowerCase(),
      correo,
      hashedPassword,
    ]);
    return res.status(200).json({
      message: "Usuario creado",
      body: {
        Trabajador: {
          nombre,
          usuario,
          correo,
          clave,
        },
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Usuario no creado");
  }
};

const updateUsuario = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { usuario, clave, salario } = req.body;
    const response = await conn.query(queries.UPDATE_USER, [
      usuario,
      clave,
      salario,
      id,
    ]);
    return res.status(200).json(`Usuario ${id} actualizado satisfactoriamente`);
  } catch (erorr) {
    console.log(error);
    res.status(500);
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await conn.query(queries.DELETE_USER, [id]);
    return res.status(200).json(`Usuario ${id} eliminado satisfactoriamente`);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getUsuarios,
  getUsuariobyId,

  createUsuario,

  updateUsuario,

  deleteUsuario,
};
