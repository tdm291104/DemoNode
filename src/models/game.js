import { DataTypes } from 'sequelize';
import sequelize from '../config/DB.js';

const Game = sequelize.define('Game', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

export default Game;
