exports.seed = function(knex, Promise) {

    const tablesToClean = ['users', 'posts']
  
    return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

  };