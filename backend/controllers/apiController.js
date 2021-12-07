const User = require('../models/userModel');

exports.create = function (req, res) {
  const { nome, pontos} = req.body;

  User.create(req.body).then(function(usuario){ 
      res.send({
        nome: nome,
        pontos: pontos,
      });
  });
};

exports.details = function (req, res){
  User.findById(req.params.id, function (err, user) {
    res.send(user);
  });
}

exports.getAll = function (req, res){
  User.find().then((function(data){
    return res.status(200).send(data);
  }))
}