# Pegasus Backend

The REST API behind [Pegasus](https://github.com/Dtowerssj/pegasus-app), a food delivery app built with React Native. It manages users, restaurants ("establecimientos") and their products, and is built with Node.js, Express and PostgreSQL.

## Endpoints

All routes are prefixed with `/api`.

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/login` | Log in as a user or as an establishment |
| `GET` `POST` | `/users` | List users, create a user |
| `GET` `PUT` `DELETE` | `/users/:id` | Read, update or delete a user |
| `GET` `POST` | `/business` | List establishments, create an establishment |
| `POST` | `/business/login` | Establishment login |
| `GET` `PUT` `DELETE` | `/business/:id` | Read, update or delete an establishment |
| `GET` `POST` | `/products` | List products, create a product |
| `GET` | `/products/catalogue/:id` | Products of one establishment |
| `GET` `PUT` `DELETE` | `/products/:id` | Read, update or delete a product |

## Data model

Three PostgreSQL tables: `usuarios` (users), `establecimientos` (name, email and password) and `productos` (name, description, price and the id of the establishment that owns it). The SQL schema is not included in this repository, so the tables have to be created manually.

## Getting started

You need Node.js and a PostgreSQL database.

```bash
git clone https://github.com/Dtowerssj/pegasus-backend.git
cd pegasus-backend
npm install
cp .env.example .env     # then fill in the value below
npm start
```

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string. The pool enables SSL, as hosted databases require. |
| `PORT` | Port for the server. Defaults to 4000. |

## Tech stack

Node.js, Express, `pg`, `cors`, `body-parser` and `dotenv`.

## Known limitations

This was a learning project and is **not production-ready**:

- Passwords are stored and compared in plain text, and the establishments list endpoint returns them.
- There is no token-based authentication or authorization on the routes.
- Requests are not validated.
