import authenticateToken from './src/middleware/auth.js';
import gamesRouter from './src/routes/games.js';
import usersRouter from './src/routes/users.js';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.send("API");
});

app.use('/api/games', authenticateToken, gamesRouter);
app.use('/api/users', usersRouter);

export default app;