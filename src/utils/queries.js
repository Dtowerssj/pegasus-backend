  
const queries = {
   
    //Usuarios"
      GET_USERS: `SELECT * FROM usuarios;`,
      GET_USER_BY_ID: `SELECT * FROM usuarios WHERE id = $1`,
      CREATE_USER: `INSERT INTO usuarios(nombre, correo, clave) VALUES ($1, $2, $3);`,
      UPDATE_USER: 'UPDATE usuarios SET nombre = $1, correo = 2$, clave = $3  WHERE id = $4 RETURNING *',
      DELETE_USER: 'DELETE FROM usuarios WHERE id = $1',

      //Login
      BUSINESS_LOGIN: `SELECT * FROM establecimientos WHERE correo = $1 AND clave = $2`,
      USER_LOGIN: `SELECT * FROM usuarios WHERE correo = $1 AND clave = $2`,

      // Negocios (Establecimientos)
      GET_BUSINESS: `SELECT id, nombre, correo, clave FROM public.establecimientos;`,
      GET_BUSINESS_BY_ID: `SELECT * FROM establecimientos WHERE id = $1`,
      CREATE_BUSINESS: `INSERT INTO establecimientos (nombre, correo, clave) VALUES ($1, $2, $3);`,
      UPDATE_BUSINESS: 'UPDATE establecimientos SET nombre = $1, correo = 2$, clave = $3  WHERE id = $4 RETURNING *',
      DELETE_BUSINESS: 'DELETE FROM establecimientos WHERE id = $1',
  
      //Productos
      GET_PRODUCTS: `SELECT id, nombre, descripcion, precio FROM public.productos;`,
      GET_PRODUCT: 'SELECT * FROM productos WHERE id = $1',
      CREATE_PRODUCT: `INSERT INTO productos(nombre, descripcion, precio) VALUES ($1, $2, $3);`,
      UPDATE_PRODUCT: 'UPDATE productos SET nombre = $1, descripcion = $2, precio = $3  WHERE id = $4 RETURNING *',
      DELETE_PRODUCT: 'DELETE FROM productos WHERE id = $1',

  
  };
    
  module.exports = queries;