const Sequelize = require("sequelize");

const config = require("../config");

const db = new Sequelize(
  config.mysql.database,
  config.mysql.username,
  config.mysql.password,
  {
    host: config.mysql.host,
    dialect: config.mysql.dialect,
    dialectOptions: {
      supportBigNumbers: true,
    },
  }
);

//modelos base

const PersonaModel = require("./models/persona");

const Persona = PersonaModel(db, Sequelize);

try {
  db.sync({
    force: false,
    logging: true,
  }).then(async () => {
    //CARGA DE DATOS INICIAL,SI FUERA NECESARIO
    //
  });
} catch (e) {
  console.error("Error: ", e);
}

//SE EXPORTAN TODOS LOS MODELOS DE BD
module.exports = {
  Persona,
};
