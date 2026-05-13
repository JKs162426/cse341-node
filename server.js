const express = require('express');
const { connectDB} = require('./db/connect');
const contactsRouter = require('./routes/contacts');
const app = express();
const port = 8080;

app.use(express.json());
app.use('/contacts', contactsRouter);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err) => { 
    console.error('Failed to connect to the database', err);
});