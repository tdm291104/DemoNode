import { DataTypes } from 'sequelize';
import sequelize from '../config/DB.js';

const Game = sequelize.define('Game', {
  nameGame: {
    type: DataTypes.STRING,
    allowNull: false
  },
  describe: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Game;
