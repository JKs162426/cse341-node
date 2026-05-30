const { getDb } = require('../db/connect');
const { ObjectId } = require('mongodb');

const getAllTeams = async (req, res) => {
  try {
    const db = getDb();
    const teams = await db.collection('teams').find().toArray();
    res.status(200).json(teams);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getTeamById = async (req, res) => {
  try {
    const db = getDb();
    const team = await db.collection('teams')
      .findOne({ _id: new ObjectId(req.params.id) });
    if (!team) return res.status(404).json({ error: 'Team not found' });
    res.status(200).json(team);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createTeam = async (req, res) => {
  try {
    const { name, city, league, worldSeriesTitles } = req.body;
    if (!name || !city || !league || worldSeriesTitles === undefined) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const db = getDb();
    const result = await db.collection('teams').insertOne(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updateTeam = async (req, res) => {
  try {
    const { name, city, league, worldSeriesTitles } = req.body;
    if (!name || !city || !league || worldSeriesTitles === undefined) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const db = getDb();
    const result = await db.collection('teams')
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deleteTeam = async (req, res) => {
  try {
    const db = getDb();
    const result = await db.collection('teams')
      .deleteOne({ _id: new ObjectId(req.params.id) });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam };
