import express from 'express';

import {
  getAllGames,
  createGame,
  getGameById,
  updateGame,
  deleteGame
} from '../controllers/gamecontroller.js';

const router = express.Router();

router.get('/', getAllGames);
router.post('/', createGame);
router.get('/:id', getGameById);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);

export default router;
