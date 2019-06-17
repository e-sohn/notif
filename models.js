const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: "notif_db”,             
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const User = sequelize.define('users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password_digest: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.hasMany(Dragon, {
  onDelete: 'cascade',
  foreignKey: {
    allowNull: false
  }
});

Dragon.belongsTo(User, {
  foreignKey: {
    allowNull: false
  }
});

module.exports = {
  sequelize,
  User                                                                
};
