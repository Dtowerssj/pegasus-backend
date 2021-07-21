

const queries = require("../utils/queries");
const conn = require("../utils/db");

const getTareas = async (req, res)=> {
    console.log("estas en get tareas");
    const client = await conn.connect();
    try{
        const response = await client.query(queries.getTasks);
        return res.status(200).json(response.rows);
    }catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }

}

/*

export const getTareasbyId = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.getTaskbyId, [id]);
    return res.json(response.rows);
}

export const createTareas = async (req: Request, res: Response) => {

    try{
        const {nombre, descripcion} = req.body;
        const response = await conn.query(queries.createTask, [
            nombre,
            descripcion
        ]);
        return res.status(200).json({
            message: 'Tarea creada',
            body: {
                Tarea: {
                    nombre,
                    descripcion
                }
            }
        });
    }catch (err){
        console.log(err);
        res.status(500);
    } 
};

export const updateTareas = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const {nombre, descripcion} = req.body;
    const response: QueryResult = await conn.query(queries.updateTask, [nombre, descripcion]);
    return res.json(`Tarea ${id} actualizada satisfactoriamente`);
}

export const deleteTareas = async (req: Request, res: Response): Promise<Response> => {
    
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.deleteTask, [id]);
    return res.json(`Tarea ${id} eliminada satisfactoraimente`);
}

*/


module.exports = {
    getTareas
};