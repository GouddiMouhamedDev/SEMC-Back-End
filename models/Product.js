module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    NomProduct: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PrixVendHT: {
      type: DataTypes.DECIMAL(10, 3),
      allowNull: false
    },
    PrixVendTTC: {
      type: DataTypes.DECIMAL(10, 3),
      allowNull: false
    },
    PrixAchatHT: {
      type: DataTypes.DECIMAL(10, 3),
      allowNull: false
    },
    PrixAchatTTC: {
      type: DataTypes.DECIMAL(10, 3),
      allowNull: false
    },
    TVA: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    Qnt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true
    },

    depot:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });



  return Product;
};
