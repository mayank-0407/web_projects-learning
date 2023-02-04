const mysql = require('mysql');

const connection = mysql.createConnection({

    host: 'localhost',
    database: 'tictac_temp',
    user: 'root',
    password: 'root'
});
connection.connect(function(error) {
    if (error) {
        throw error;
    } else {
        console.log('database connected');
    }
})
module.exports = connection;