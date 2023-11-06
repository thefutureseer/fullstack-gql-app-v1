const mongoose = require('mongoose');

// Set strictQuery to true to suppress the deprecation warning
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGODB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;