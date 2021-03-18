const host = 'queenie.db.elephantsql.com',
    database = 'ndllzalx',
    user = 'ndllzalx',
    password = 'F-YbeqLnZjt2l8zpbvubeX5j_Rqb6oxL'

const pgp = require('pg-promise')({
    query: function(event) {
        console.log('QUERY:', event.query);
    }
});

//define options

const options = {
    host,
    database,
    user,
    password
}

const db = pgp(options);

module.exports = db;