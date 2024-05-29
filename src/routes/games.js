import express from 'express';
import Game from '../models/game.js';

const router = express.Router();

// Get all games
router.get('/', async (req, res) => {
    res.send("helo")
//   try {
//     const games = await Game.findAll();
//     res.json(games);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
});

// Get one game
router.get('/:id', getGame, (req, res) => {
  res.json(res.game);
});

// Create a game
router.post('/', async (req, res) => {
  const game = Game.build({
    title: req.body.title,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    rating: req.body.rating
  });
  try {
    const newGame = await game.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a game
router.patch('/:id', getGame, async (req, res) => {
  if (req.body.title != null) {
    res.game.title = req.body.title;
  }
  if (req.body.genre != null) {
    res.game.genre = req.body.genre;
  }
  if (req.body.releaseDate != null) {
    res.game.releaseDate = req.body.releaseDate;
  }
  if (req.body.rating != null) {
    res.game.rating = req.body.rating;
  }
  try {
    const updatedGame = await res.game.save();
    res.json(updatedGame);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a game
router.delete('/:id', getGame, async (req, res) => {
  try {
    await res.game.destroy();
    res.json({ message: 'Deleted Game' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getGame(req, res, next) {
  let game;
  try {
    game = await Game.findByPk(req.params.id);
    if (game == null) {
      return res.status(404).json({ message: 'Cannot find game' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.game = game;
  next();
}

export default router;
