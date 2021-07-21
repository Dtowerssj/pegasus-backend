  
const queries = {
   
    //Usuarios"
      GET_USERS: `SELECT id, nombre, usuario, correo, clave FROM public.users;`,
      GET_USER_BY_ID: `SELECT * FROM public users WHERE id = $1`,
      INSERT_USER: `INSERT INTO public.users(nombre, usuario, correo, clave) VALUES ($1, $2, $3, $4);`,
      DELETE_USER: 'DELETE FROM public usuarios WHERE ID = $1',
      UPDATE_USER: 'UPDATE public usuarios SET "Usuario"=$1, "Clave"=$2, "Salario"=$3 WHERE id=$4',
      LOGIN_USER: 'SELECT "Usuario", "Clave" FROM public."Trabajadores" WHERE id = $1',
  
      //Tareas
       getTasks: `SELECT id, nombre, descripcion FROM public.tareas;`,
       getTaskbyId: 'SELECT * FROM public.tareas WHERE id = $1',
       createTask: `INSERT INTO public.tareas(nombre, descripcion) VALUES ($1, $2);`,
       updateTask: 'UPDATE task SET value = $1, img = $2, strikethrough = $3, position_list = $4, position_inbox = $5, edited = $6, time_limit = $7, time_alert = $8, tag = $9, list = $10  WHERE task_id = $11 RETURNING *',
       deleteTask: 'DELETE FROM tareas WHERE id = $1',
  
       //Tags
       getTags: 'SELECT id, nombre, color FROM  public.tags',
       getTagsbyId: 'SELECT * FROM tags WHERE id = $1',
       createTags: 'INSERT INTO tags (id, nombre, color) VALUES ($1, $2, $3) RETURNING *',
       updateTags: 'UPDATE tags SET id = $1, nombre = $2, color = $3',
       deleteTags: 'DELETE FROM tags WHERE id = $1',
  
       //Login
       GET_LOGIN: `SELECT * FROM public.users WHERE correo = $1 AND clave = $2`,
  
  };
    
  export default queries;