module.exports = (sequelize, DataTypes) => {
    const Devis = sequelize.define("Devis", {
      NumDevis: {
        type: DataTypes.INTEGER,
        unique: true
      },
      dateDevis: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      idclien:{
        type: DataTypes.INTEGER,
      }
    });
  
    Devis.beforeCreate(async (devis) => {
      const lastDevis = await Devis.findOne({
        order: [['NumDevis', 'DESC']]
      });
      if (lastDevis) {
        devis.NumDevis = lastDevis.NumDevis + 1;
      } else {
        devis.NumDevis = 1;
      }
    });
  
    return Devis;
  };
  