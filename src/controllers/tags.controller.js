import queries from "../utils/queries";
import { conn } from "../utils/db";
import { Request, response, Response } from "express";

/*
export const getTags = async (req, res) => {
    try{
        const response: QueryResult = await conn.query(queries.getTasks);
        return res.status(200).json(response.rows);
    }catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }

}

export const getTagsbyId = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.getTaskbyId, [id]);
    return res.json(response.rows);
}

export const createTags = async (req: Request, res: Response) => {
    const task = await conn.connect();

    try{
        const {nombre, color} = req.body;
        const response = await task.query(queries.createTask, [
            nombre,
            color
        ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(500);
    }finally{
        task.release(true)
    }
};

export const updateTags = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const {nombre} = req.body;
    const {color} = req.body;
    const response: QueryResult = await conn.query(queries.updateTask, [id, nombre, color]);
    return res.json(`Tarea ${id} actualizada satisfactoriamente`);
}

export const deleteTareas = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.deleteTask, [id]);
    return res.json(`Tarea ${id} eliminada satisfactoraimente`);
}


*/