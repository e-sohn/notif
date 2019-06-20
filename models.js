const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: "notif_db",
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
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

const Message = sequelize.define('messages', {
  text: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Chatroom = sequelize.define('chatrooms', {
  genre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  end_time: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_people: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  limit_people: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

User.hasMany(Chatroom, {
  onDelete: 'cascade',
});

Chatroom.belongsTo(User, {
  foreignKey: {
    allowNull: false
  }
});

User.hasMany(Message, {
  onDelete: 'cascade',
});

Message.belongsTo(User, {
  foreignKey: {
    allowNull: false
  }
});

Chatroom.hasMany(Message, {
  onDelete: 'cascade',
});

Message.belongsTo(Chatroom, {
  foreignKey: {
    allowNull: false
  }
});

module.exports = {
  sequelize,
  User,
  Message,
  Chatroom
};
