const { getDb } = require('../db/connect');
const { ObjectId } = require('mongodb');

const getAllContacts = async (req, res) => {
  try {
    const db = getDb();
    const contacts = await db.collection('contacts').find().toArray();
    res.json(contacts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getContactById = async (req, res) => {
  try {
    const db = getDb();
    const contact = await db.collection('contacts')
      .findOne({ _id: new ObjectId(req.params.id) });
    if (!contact) return res.status(404).json({ error: 'Contacto no encontrado' });
    res.json(contact);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createContact = async (req, res) => {
  try {
    const db = getDb();
    const result = await db.collection('contacts').insertOne(req.body);
    res.status(201).json({ _id: result.insertedId, ...req.body });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const db = getDb();
    const result = await db.collection('contacts')
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
    if (result.matchedCount === 0) return res.status(404).json({ error: 'No contact found' });
    res.json({ message: 'Contact updated' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const db = getDb();
    const result = await db.collection('contacts')
      .deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'No contact found' });
    res.json({ message: 'Contact deleted' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = { getAllContacts, getContactById, createContact, updateContact, deleteContact };
