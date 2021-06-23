const Schools = (sequelize, DataTypes) => {
  const School = sequelize.define(
    "schools",
    {
      name: DataTypes.STRING,
      director: DataTypes.STRING,
    },
    { timestamps: false }
  );
  School.associate = (models) => {
    School.hasMany(models.classes, {
      foreignKey: "id",
      as: "class",
    });
  };
  return School;
};

module.exports = Schools;
