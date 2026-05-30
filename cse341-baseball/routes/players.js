const express = require('express');
const router = express.Router();
const { getAllPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer } = require('../controllers/players');

router.get('/', getAllPlayers);
router.get('/:id', getPlayerById);
router.post('/', (req, res) => {
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      firstName: 'Jesus',
      lastName: 'Figueroa',
      team: 'Yankees',
      position: 'Pitcher',
      battingAverage: 0.285,
      homeRuns: 25,
      rbi: 80,
      nationality: 'Dominican Republic',
      age: 28
    }
  } */
  createPlayer(req, res);
});
router.put('/:id', (req, res) => {
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      firstName: 'Jesus',
      lastName: 'Figueroa',
      team: 'Yankees',
      position: 'Pitcher',
      battingAverage: 0.285,
      homeRuns: 25,
      rbi: 80,
      nationality: 'Dominican Republic',
      age: 28
    }
  } */
  updatePlayer(req, res);
});
router.delete('/:id', deletePlayer);

module.exports = router;
