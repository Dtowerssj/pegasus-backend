  
const queries = {
   
    //Usuarios"
      GET_USERS: `SELECT id, nombre, usuario, correo, clave FROM users;`,
      GET_USER_BY_ID: `SELECT * FROM users WHERE id = $1`,
      INSERT_USER: `INSERT INTO users(nombre, usuario, correo, clave) VALUES ($1, $2, $3, $4);`,
  
      //Tareas
       GET_TAREAS: `SELECT id, nombre, descripcion FROM tareas;`,
       getTaskbyId: 'SELECT * FROM tareas WHERE id = $1',
       createTask: `INSERT INTO tareas(nombre, descripcion) VALUES ($1, $2);`,
      // updateTask: 'UPDATE task SET value = $1, img = $2, strikethrough = $3, position_list = $4, position_inbox = $5, edited = $6, time_limit = $7, time_alert = $8, tag = $9, list = $10  WHERE task_id = $11 RETURNING *',
       deleteTask: 'DELETE FROM tareas WHERE id = $1',
  
       //Tags
       /*
       getTags: 'SELECT id, nombre, color FROM  tags',
       getTagsbyId: 'SELECT * FROM tags WHERE id = $1',
       createTags: 'INSERT INTO tags (id, nombre, color) VALUES ($1, $2, $3) RETURNING *',
       updateTags: 'UPDATE tags SET id = $1, nombre = $2, color = $3',
       deleteTags: 'DELETE FROM tags WHERE id = $1',
        */

       //Login
       GET_LOGIN: `SELECT * FROM users WHERE correo = $1 AND clave = $2`,
  
  };
    
  module.exports = queries;