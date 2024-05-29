import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
