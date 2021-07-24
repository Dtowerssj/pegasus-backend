  
const queries = {
   
    //Usuarios"
      GET_usuarios: `SELECT id, nombre, correo, clave, usuario FROM public.usuarios;`,
      GET_USER_BY_ID: `SELECT * FROM usuarios WHERE id = $1`,
      INSERT_USER: `INSERT INTO usuarios(nombre, usuario, correo, clave) VALUES ($1, $2, $3, $4);`,

      //Login
      GET_LOGIN: `SELECT * FROM establecimientos WHERE correo = $1 AND clave = $2`,

      // Negocios (Establecimientos)
      GET_BUSINESS: `SELECT id, nombre, correo, clave FROM public.establecimientos;`,
      GET_BUSINESS_BY_ID: `SELECT * FROM usuarios WHERE id = $1`,
      INSERT_BUSINESS: `INSERT INTO usuarios(nombre, usuario, correo, clave) VALUES ($1, $2, $3, $4);`,
      UPDATE_BUSINESS: 'UPDATE task SET value = $1, img = $2, strikethrough = $3, position_list = $4, position_inbox = $5, edited = $6, time_limit = $7, time_alert = $8, tag = $9, list = $10  WHERE task_id = $11 RETURNING *',
      DELETE_BUSINESS: '',
  
      //Productos
      GET_PRODUCTS: `SELECT id, nombre, descripcion, precio FROM public.productos;`,
      GET_PRODUCT: 'SELECT * FROM tareas WHERE id = $1',
      CREATE_PRODUCT: `INSERT INTO tareas(nombre, descripcion) VALUES ($1, $2);`,
      UPDATE_PRODCUT: 'UPDATE task SET value = $1, img = $2, strikethrough = $3, position_list = $4, position_inbox = $5, edited = $6, time_limit = $7, time_alert = $8, tag = $9, list = $10  WHERE task_id = $11 RETURNING *',
      DELETE_PRODUCT: 'DELETE FROM tareas WHERE id = $1',

  
  };
    
  module.exports = queries;