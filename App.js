import express from 'express';
import sequelize from './src/config/DB.js';
import authenticateToken from './src/middleware/auth.js';
import gamesRouter from './src/routes/games.js';
import usersRouter from './src/routes/users.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/games', gamesRouter);
app.use('/users', usersRouter);

// Kết nối đến cơ sở dữ liệu và đồng bộ model
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('Connected to MySQL database');
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

