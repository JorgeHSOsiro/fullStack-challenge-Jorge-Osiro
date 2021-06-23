const Schools = (sequelize, DataTypes) => {
  const School = sequelize.define(
    "schools",
    {
      name: DataTypes.STRING,
    },
    { timestamps: false }
  );
  School.associate = (models) => {
    School.hasMany(models.classes, {
      foreignKey: "school_id",
      as: "class",
    });
    School.hasOne(models.directors, {
      foreignKey: "school_id",
      as: "director",
    })
  };

  return School;
};

module.exports = Schools;
