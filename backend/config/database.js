const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@database.lalaw.mongodb.net/fpfGamesDB?retryWrites=true&w=majority');

mongoose.connection.on('connected', function () {
  console.log('Connected to Database');
});

mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});