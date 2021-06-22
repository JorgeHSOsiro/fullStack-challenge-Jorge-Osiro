const Classes = (sequelize, DataTypes) => {
    const Class = sequelize.define(
      'classes',
      {
        user_Id: DataTypes.INTEGER,
        name: Sequelize.STRING,
        representative_one: Sequelize.STRING, 
        representative_two: Sequelize.STRING,
        contact: Sequelize.STRING,
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
  