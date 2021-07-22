const queries = require("../utils/queries");
const conn = require("../utils/db");

const getTareas = async (req, res) => {
  console.log("estas en get tareas");
  const client = await conn.connect();
  try {
    console.log(queries.GET_TAREAS);
    const response = await client.query(queries.GET_TAREAS);
    return res.status(200).json(response.rows);
  } catch {
    return res.status(505);
}finally{
  client.release(true);
}
};

const getTareasbyId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await conn.query(queries.getTaskbyId, [id]);
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const createTareas = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const response = await conn.query(queries.createTask, [
      nombre,
      descripcion,
    ]);
    return res.status(200).json({
      message: "Tarea creada",
      body: {
        Tarea: {
          nombre,
          descripcion,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const updateTareas = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre, descripcion } = req.body;
    const response = await conn.query(queries.updateTask, [
      nombre,
      descripcion,
    ]);
    return res.status(200).json(`Tarea ${id} actualizada satisfactoriamente`);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const deleteTareas = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await conn.query(queries.deleteTask, [id]);
    return res.status(200).json(`Tarea ${id} eliminada satisfactoraimente`);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getTareas,
  getTareasbyId,

  createTareas,

  updateTareas,

  deleteTareas,
};
