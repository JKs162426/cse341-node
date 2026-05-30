require('dotenv').config();
const express = require('express');
const { connectDB } = require('./db/connect');
const playersRouter = require('./routes/players');
const teamsRouter = require('./routes/teams');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
const port = 8080;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/players', playersRouter);
app.use('/teams', teamsRouter);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error('Failed to connect to the database', err);
});
