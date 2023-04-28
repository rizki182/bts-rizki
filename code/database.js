const mariadb = require('mariadb');

let pool

module.exports = {
    getPool: (callback) => {
        if (pool) {
            return pool;
        } else {
            pool = mariadb.createPool({
                host: 'mariadb', 
                user:'bts', 
                database: 'db_project_rizki',
                password: 'bts',
                connectionLimit: 5
           });
    
           return pool
        }
    }
}