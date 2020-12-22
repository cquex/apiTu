var sequelize = require("sequelize");
const {Persona} = require("../../../store/mysql");

const insert = async (req) => {
  return (persona = await Persona.create(req.body));
};
const change = async (req) => {
  const personaUpdate = await Persona.update(req.body, {
    where: {personaId: req.params.personaId},
  });
  if (personaUpdate > 0) {
    return "Cambio realizado con exito";
  } else {
    
    throw "No se actualizo informacion";
  }
};
const destroy = async (req) => {
  const personaUpdate = await Persona.destroy({
    where: {personaId: req.params.personaId},
  });

  if (personaUpdate > 0) {
    return "Eliminado realizado con exito";
  } else {
    throw "No se elimino informacion";
  }
};

const list = async (req) => {
  console.log(req.query);
  const limite = req.query.limite ? parseInt(req.query.limite) : 10;
  const pagina = req.query.pagina ? parseInt(req.query.pagina) : 1;
  const filtro = req.query.filtro;

  return (personas = await Persona.findAndCountAll({
    offset: pagina * limite,
    limit: limite,
    /*
    where: {
      [sequelize.Op.or]: {
        namesQuery: sequelize.where(
          sequelize.fn(
            "concat",
            sequelize.fn("IFNULL", sequelize.col("nombre1"), ""),
            " ",
            sequelize.fn("IFNULL", sequelize.col("nombre2"), ""),
            " ",
            sequelize.fn("IFNULL", sequelize.col("apellido1"), ""),
            " ",
            sequelize.fn("IFNULL", sequelize.col("apellido2"), "")
          ),
          {
            [sequelize.Op.like]: `%${filtro}%`,
          }
        ),
      },
    },
    */
  }));
};

module.exports = {
  insert,
  change,
  list,
  destroy,
};
