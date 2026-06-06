const express = require('express');
const router = express.Router();
const { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam } = require('../controllers/teams');
const isAuthenticated = require('../auth/isAuthenticated');

router.get('/', getAllTeams);
router.get('/:id', getTeamById);
router.post('/', isAuthenticated, (req, res) => {
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
router.put('/:id', isAuthenticated, (req, res) => {
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
router.delete('/:id', isAuthenticated, deleteTeam);

module.exports = router;
