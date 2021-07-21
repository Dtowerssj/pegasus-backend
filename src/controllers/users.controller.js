
const conn = require('../utils/db');
const queries = require('../utils/queries')
//import { genSaltSync, hashSync } from 'bcryptjs';


const getUsuarios = async (req, res) => {
    console.log("estas en get users")
    const client = await conn.connect();
    try {
        const response = await client.query(queries.GET_USERS);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
} 

/*
export const getUsuariobyId = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.GET_USER_BY_ID, [id]);
    return res.json(response.rows);
}

 export const createUsuario = async (req:Request, res: Response): Promise<Response> => {
    
    const { nombre, usuario, correo, clave } = req.body;
    
    try {
        const salt = genSaltSync(10);
        const hashedPassword = hashSync(clave, salt);
        const response: QueryResult = await conn.query(queries.INSERT_USER, [nombre, usuario.toLowerCase(), correo, hashedPassword ]);
        return res.json({
        message: 'Usuario creado',
        body: {
            Trabajador: {
                nombre, usuario, correo, clave
            }
        }
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json('Usuario no creado');
    }
    
}

export const updateUsuario = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const {usuario, clave, salario } = req.body;
    const response: QueryResult = await conn.query(queries.UPDATE_USER, [ usuario, clave, salario, id]);
    return res.json(`Usuario ${id} actualizado satisfactoriamente`);
}

export const deleteUsuario = async (req:Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await conn.query(queries.DELETE_USER, [id]); 
    return res.json(`Usuario ${id} eliminado satisfactoriamente`);
} 
*/

module.exports = {
    getUsuarios
}