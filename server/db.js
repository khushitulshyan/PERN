const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "host.docker.internal",
  port: 5432,
  database: "postgres"
});

// DB_CONNECTION_STRING= "postgres://postgres:1234@localhost:5432/postgres"     

// const pool = new Pool({
//   user: process.env.PG_USER,      //postgres user
//   host: process.env.PG_ENDPOINT,  //localhost (I also tried 127.0.0.1)
//   database: process.env.PG_DB,    //database name to connect to
//   password: process.env.PG_PASS,  //postgres user password
//   port: process.env.PG_PORT       //5432
// });

module.exports = pool;