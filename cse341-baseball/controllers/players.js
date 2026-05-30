const { getDb } = require('../db/connect');
const { ObjectId } = require('mongodb');

const getAllPlayers = async (req, res) => {
  try {
    const db = getDb();
    const players = await db.collection('players').find().toArray();
    res.status(200).json(players);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getPlayerById = async (req, res) => {
  try {
    const db = getDb();
    const player = await db.collection('players')
      .findOne({ _id: new ObjectId(req.params.id) });
    if (!player) return res.status(404).json({ error: 'Player not found' });
    res.status(200).json(player);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createPlayer = async (req, res) => {
  try {
    const { firstName, lastName, team, position, battingAverage, homeRuns, rbi, nationality, age } = req.body;
    if (!firstName || !lastName || !team || !position || !battingAverage || !homeRuns || !rbi || !nationality || !age) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const db = getDb();
    const result = await db.collection('players').insertOne(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updatePlayer = async (req, res) => {
  try {
    const { firstName, lastName, team, position, battingAverage, homeRuns, rbi, nationality, age } = req.body;
    if (!firstName || !lastName || !team || !position || !battingAverage || !homeRuns || !rbi || !nationality || !age) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const db = getDb();
    const result = await db.collection('players')
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deletePlayer = async (req, res) => {
  try {
    const db = getDb();
    const result = await db.collection('players')
      .deleteOne({ _id: new ObjectId(req.params.id) });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = { getAllPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer };
