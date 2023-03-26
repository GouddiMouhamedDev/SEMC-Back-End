module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define("User",{
      username:{
        type:DataTypes.STRING,
        allowNull:false
      },
 
      email:{
        type:DataTypes.STRING,
        allowNull:false

      },
      password:{
        type:DataTypes.STRING,
        allowNull:false

      },
      img: {
        type: DataTypes.STRING,
        allowNull:true
      }
    });

    return User;
};