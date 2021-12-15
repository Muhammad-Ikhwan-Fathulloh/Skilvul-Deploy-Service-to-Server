const mongoose = require('mongoose');

const dbURI =
  'mongodb+srv://dolannation:dolan170845@cluster0.bqtzb.mongodb.net/dolannation?retryWrites=true&w=majority';

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useUnifiedTopology: true,
};

// Establishing connectin with dbURI and option with max pool

mongoose.connect(dbURI, options).then(
  () => {
    console.log('Database connection established!');
  },
  (err) => {
    console.log('Error connecting Database instance due to: ', err);
  }
);

// require any models
require('../models/Task');
