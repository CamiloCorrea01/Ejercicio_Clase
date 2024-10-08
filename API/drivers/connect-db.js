const mongoose = require('mongoose');

const URI = "mongodb+srv://cristiancorrea01:lVkVNjEdc8WAkgYG@cluster0.9v5ou.mongodb.net/ejercicio?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);

mongoose.connect(URI)
  .then(() => console.log('Connect DB Success'))
  .catch((err) => console.log('Connect DB Fail ' + err));

module.exports = mongoose;
