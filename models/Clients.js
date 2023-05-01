module.exports = (sequelize, DataTypes) => {
    const Clients = sequelize.define("Clients", {
      Nom: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Solde: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: false
      },
      
      Mat:{
        type: DataTypes.STRING,
        allowNull: false
      },
      Num:{
        type: DataTypes.STRING,
        allowNull:true
      },
      Adresse:{
        type: DataTypes.STRING,
        allowNull:true
      }
    });

  
    return Clients;
  };
  