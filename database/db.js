const Firebird = require('node-firebird');
const config = require('config');
const winston = require('winston');


var options = {};
options.host = '13.89.234.29';
options.port = 3050;
options.database = 'C:\\Firebird_SQL_DB\\FB2_5_64X_1\\DB\\ESPL_CCM_POC_FB_DB.FDB';
options.user = 'espl_dev';
options.password = 'Welcome1';
options.lowercase_keys = false; // set to true to lowercase keys
options.role = null;            // default
options.pageSize = 4096;        // default when creating database


const pool = Firebird.pool(5, options);


const getDB = () => {
    return new Promise((resolve, reject) => {
        pool.get((err, db) => {
            if (err)
                reject(err)
            resolve(db)
        })
    });
}

const executeQuery = (db, queryToBeExecuted) => {
    return new Promise((resolve, reject) => {
        db.query(queryToBeExecuted, function (err, result) {
            if (err)
                reject(err)
            resolve(result)
            db.detach();
        })
    })
}

module.exports = { getDB, executeQuery }

