const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Baseball API',
    description: 'API for managing baseball players and teams'
  },
  host: 'cse341-baseball.onrender.com',
  schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
