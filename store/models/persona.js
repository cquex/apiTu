module.exports = (sequelize, type) => {
  return sequelize.define(
    "persona",
    {
      personaId: {
        type: type.INTEGER(5),
        primaryKey: true,
        autoIncrement: true,
      },
      nombreCompleto: {
        type: type.STRING(300),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      telefono: type.INTEGER(12),
      direccion: type.STRING(300),
      foto: type.STRING(300),
      estadoId: {
        type: type.INTEGER(5),
        allowNull: false,
      },
      fechaHoraIngreso: {
        type: type.DATE,
        defaultValue: type.NOW,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
