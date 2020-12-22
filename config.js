module.exports = {
  api: {
    port: process.env.API_PORT || 3100, //SE CONFIGURA EL API PORT, SI NO TIENE CONFIGURADO LO PONDRA EN EL 3100
  },
  jwt: {
    secret:
      process.env.JWT_SECRET || //SE CONFIGURA EL JWT KEY, SI NO TIENE CONFIGURADO LO PONDRA EL DEFINIDO
      "llaveTuPrueba123.",
  },
  mysql: {
    database: "tudbcquex",
    username: "admincquex",
    password: "admincquex",
    host: "tutestcquex.cyf9v7qjgr5h.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
