//Server
import app from './App.js';
import sequelize from './src/config/DB.js';

const port = 3000;

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('Connected to MySQL database');
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});