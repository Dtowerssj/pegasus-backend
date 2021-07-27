const queries = require("../utils/queries");
const conn = require("../utils/db");

const getProducts = async (req, res) => {
  const client = await conn.connect();
  try {
    const response = await client.query(queries.GET_PRODUCTS);
    return res.status(200).json(response.rows);
  } catch {
    return res.status(505);
  }finally{
  client.release(true);
  }
};



const getProductbyId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await conn.query(queries.GET_PRODUCT, [id]);
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const createProduct = async (req, res) => {
  try {
    const { nombre, descripcion, precio } = req.body;
    const response = await conn.query(queries.CREATE_PRODUCT, [
      nombre,
      descripcion,
      precio,
    ]);
    return res.status(200).json({
      message: "producto creado",
      body: {
        Producto: {
          nombre,
          descripcion,
          precio
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre, descripcion, precio } = req.body;
    const response = await conn.query(queries.UPDATE_PRODUCT, [
      id,
      nombre,
      descripcion,
      precio,
    ]);
    return res.status(200).json(`prooducto ${id} actualizado satisfactoriamente`);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await conn.query(queries.DELETE_PRODUCT, [id]);
    return res.status(200).json(`Producto ${id} eliminado del catálogo satisfactoraimente`);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {    
  getProducts,
  getProductbyId,

  createProduct,

  updateProduct,

  deleteProduct,
};
