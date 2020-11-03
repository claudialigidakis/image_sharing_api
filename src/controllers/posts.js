const responsesModel = require('../models/posts')

function getOne(req, res, next) {
  if (!req.params.postId) {
    return next({status: 400, message: 'Bad Request'})
  }
  responsesModel.getOne(req.params.postId)
  .then(data => {
    res.status(200).send({data})
  }).catch(next)
}

function getAll(req, res, next){
    console.log("in getAll")
  responsesModel.getAll()
  .then(data => {
    res.status(200).send({data})
  })
  .catch(next)
}

function create(req, res, next) {
  if (!req.body) {
    return next({status: 400, message: 'Missing responses'})
  }
  responsesModel.create(req.body.ref_key, req.body.picture)
  .then(function(data) {
    return res.status(201).send({data})
  }).catch(next)
}

module.exports = {
    getOne,
    getAll,
    create,
  }