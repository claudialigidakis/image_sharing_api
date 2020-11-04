const knex = require('../../db/knex');

function getAll(){
  return (
    knex('posts')
    .returning('*')
  )
}

function getOne(postId){
  return (
    knex('posts')
    .where({postId})
  )
}

function create(ref_key, path){
  return (
  knex('posts')
  .insert({ref_key: ref_key, picture: path})
  .returning('*')
  )
}

module.exports = {getOne, getAll, create}