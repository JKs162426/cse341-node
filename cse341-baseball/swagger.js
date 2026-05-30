const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Baseball API',
    description: 'API for managing baseball players and teams'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
