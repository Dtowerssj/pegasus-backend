const queries = require("../utils/queries");
const conn = require("../utils/db");

const getUsers = async (req, res) => {
  const client = await conn.connect();
  try {
    const response = await client.query(queries.GET_USERS);
    return res.status(200).json(response.rows);
  } catch {
    return res.status(505);
  }finally{
  client.release(true);
  }
};



const getUserbyId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await conn.query(queries.GET_USER_BY_ID, [id]);
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const createUser = async (req, res) => {
  try {
    const { nombre, correo, clave } = req.body;
    const response = await conn.query(queries.CREATE_USER, [
      nombre,
      correo,
      clave,
    ]);
    return res.status(200).json({
      message: "Usuario creado",
      body: {
        Usero: {
          nombre,
          correo,
          clave
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre, correo, clave } = req.body;
    const response = await conn.query(queries.UPDATE_USER, [
      nombre,
      correo,
      clave,
      id
    ]);
    return res.status(200).json(`prooducto ${id} actualizado satisfactoriamente`);
  } catch (error) {
    console.log(error);
    res.status(500).json('error');
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await conn.query(queries.DELETE_User, [id]);
    return res.status(200).json(`Usuario ${id} eliminado del catálogo satisfactoraimente`);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {    
  getUsers,
  getUserbyId,

  createUser,

  updateUser,

  deleteUser,
};
