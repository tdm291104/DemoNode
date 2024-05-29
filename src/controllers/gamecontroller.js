import Game from '../models/game.js';

//Hàm get allgame
export const getAllGames = async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Hàm tạo game
export const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Hàm get game theo id
export const getGameById = async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//hàm chỉnh sửa game
export const updateGame = async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    await game.update(req.body);
    res.json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteGame = async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    await game.destroy();
    res.json({ message: 'Game deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
