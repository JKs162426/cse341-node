const express = require('express');
const router = express.Router();
const { getDb } = require('../db/connect');
const { ObjectId } = require('mongodb');

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const db = getDb();
    const contacts = await db.collection('contacts').find().toArray();
    res.json(contacts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/:id', async (req, res) => {
    try {
      const db = getDb();
      const contact = await db.collection('contacts')
        .findOne({ _id: new ObjectId(req.params.id) });
      if (!contact) return res.status(404).json({ error: 'Contacto no encontrado' });
      res.json(contact);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  
router.post('/', async (req, res) => {
    try {
      const db = getDb();
      const result = await db.collection('contacts').insertOne(req.body);
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  
router.put('/:id', async (req, res) => {
    try {
      const db = getDb();
      const result = await db.collection('contacts')
        .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
      res.json(result);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  
router.delete('/:id', async (req, res) => {
    try {
      const db = getDb();
      const result = await db.collection('contacts')
        .deleteOne({ _id: new ObjectId(req.params.id) });
      res.json(result);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

module.exports = router;
