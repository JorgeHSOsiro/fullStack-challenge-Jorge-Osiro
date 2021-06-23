const Classes = (sequelize, DataTypes) => {
    const Class = sequelize.define(
      'classes',
      {
        user_Id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        representative_one: DataTypes.STRING, 
        representative_two: DataTypes.STRING,
        contact: DataTypes.STRING,
      },
      { timestamps: false },
    );
    Class.associate = (models) => {
      Class.belongsTo(models.schools, {
          foreignKey: 'id',
          as: 'school',
        });
      };
    return Class;
  };
  
  module.exports = Classes;
  