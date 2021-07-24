const conn = require("../utils/db");
const queries = require("../utils/queries");  

const getBusiness = async (req, res) => {
  console.log("estas en get business");
  const client = await conn.connect();
  try {
    const response = await client.query(queries.GET_BUSINESS);
    return res.status(200).json(response.rows);
  } catch {
    res.status(505);
}finally{
  client.release(true);
}
};

const getBusinessbyId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await conn.query(queries.GET_BUSINESS_BY_ID, [id]);
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const createBusiness = async (req, res) => {
  const { nombre, correo, clave } = req.body;

  try {
    const response = await conn.query(queries.INSERT_BUSINESS, [
      nombre,
      correo.toLowerCase(),
      clave
    ]);
    return res.status(200).json({
      message: "Negocio creado",
      body: {
        Business: {
          nombre,
          correo,
          clave,
        },
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Negocio no creado");
  }
};

const updateBusiness = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre, correo, clave } = req.body;
    const response = await conn.query(queries.UPDATE_BUSINESS, [
      nombre,
      correo,
      clave,
      id,
    ]);
    return res.status(200).json(`Negocio ${id} actualizado satisfactoriamente`);
  } catch (erorr) {
    console.log(error);
    res.status(500);
  }
};

const deleteBusiness = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await conn.query(queries.DELETE_BUSINESS, [id]);
    return res.status(200).json(`Negocio ${id} eliminado satisfactoriamente`);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getBusiness,
  getBusinessbyId,

  createBusiness,

  updateBusiness,

  deleteBusiness,
};
