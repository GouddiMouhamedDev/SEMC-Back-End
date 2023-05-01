module.exports = (sequelize, DataTypes) => {
    const contDevis = sequelize.define("contDevis", {
        NumDevis: {
            type: DataTypes.INTEGER,
          
          },
          idClients: {
            type: DataTypes.INTEGER,
            
          },
          NomProduct: {
            type: DataTypes.STRING,
            allowNull: false
          },
          Qnt: {
              type: DataTypes.INTEGER,
            allowNull: false
          },
          PrixUnitTTC: {
            type: DataTypes.DECIMAL(10, 3),
            allowNull: false
          },
          PrixTotalTTC: {
            type: DataTypes.DECIMAL(10, 3),
            allowNull: true
          },
          TVA: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
          },
         


    });

    contDevis.beforeSave((contDevis) => {
      contDevis.PrixTotalTTC = contDevis.Qnt * contDevis.PrixUnitTTC;
  });
  
  
    return contDevis;
  };
  