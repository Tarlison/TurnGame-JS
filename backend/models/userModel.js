const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nome: {
  type: String,
  required: [true, 'nome obrigatorio']
  },
  pontos: {
  type: Number,
  required: [true, 'pontos obrigatorio']
  }
  },
  {timestamps: true,});

const user = mongoose.model('User', UserSchema);

module.exports = user;