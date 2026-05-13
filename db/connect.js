const { MongoClient } = require('mongodb');

let db;

const connectDB = async () => {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  db = client.db('cse341');
  console.log('Conectado a MongoDB');
};

const getDb = () => db;

module.exports = { connectDB, getDb };