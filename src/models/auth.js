
const db = require('../../db/knex')
const bcrypt = require('bcrypt')
const userModel = require('./users')

function login(email, password){
  let user
  return userModel.getOneByEmail(email)
  .then(function(data){
    if(!data) throw { status: 400, message: "Bad Request"}
    user = data

    return bcrypt.compare(password, data['hashed_password'])
  })
  .catch(bcrypt.MISMATCH_ERROR, function(){
    throw { status: 401, message: "Unauthorized"}
  })
  .then(function(){
    delete user.password
    return user
  })
}

module.exports = {
  login
}