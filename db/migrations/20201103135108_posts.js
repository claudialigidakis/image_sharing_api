  
const TABLE_NAME = 'posts'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('ref_key').notNullable().references('ref_key')
    table.string('picture').defaultTo('http://www.placebear.com/50/50')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};