const model = require('../models/posts')
const multer = require('multer');

var DIR = './uploads/';
var upload = multer({dest: DIR}).single('picture');

function getOne(req, res, next) {
  if (!req.params.postId) {
    return next({status: 400, message: 'Bad Request'})
  }
  model.getOne(req.params.postId)
  .then(data => {
    res.status(200).send({data})
  }).catch(next)
}

function getAll(req, res, next){
  model.getAll()
  .then(data => {
    res.status(200).send({data})
  })
  .catch(next)
}

function create(req, res, next) {
  if (!req.body) {
    return next({status: 400, message: 'Missing responses'})
  }  
  var path = '';
  upload((req, res) => {
     path = req.file.path;
  });  
  
  model.create(req.body.ref_key, path)
  .then(function(data) {
    return res.status(201).send({data})
  }).catch(next)
}

module.exports = {
    getOne,
    getAll,
    create,
  }