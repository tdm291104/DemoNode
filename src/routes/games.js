import express from 'express';

import {
  getAllGames,
  createGame,
  getGameById,
  updateGame,
  deleteGame
} from '../controllers/gamecontroller.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getAllGames);
router.post('/', authenticateToken, createGame);
router.get('/:id', authenticateToken, getGameById);
router.put('/:id', authenticateToken, updateGame);
router.delete('/:id', authenticateToken, deleteGame);

export default router;
