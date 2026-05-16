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

module.exports = { getAllContacts, getContactById };
