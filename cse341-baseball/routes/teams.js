const express = require('express');
const router = express.Router();
const { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam } = require('../controllers/teams');

router.get('/', getAllTeams);
router.get('/:id', getTeamById);
router.post('/', (req, res) => {
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      name: 'Yankees',
      city: 'New York',
      league: 'AL',
      worldSeriesTitles: 27
    }
  } */
  createTeam(req, res);
});
router.put('/:id', (req, res) => {
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      name: 'Yankees',
      city: 'New York',
      league: 'AL',
      worldSeriesTitles: 27
    }
  } */
  updateTeam(req, res);
});
router.delete('/:id', deleteTeam);

module.exports = router;
