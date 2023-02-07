const mysql = require('mysql');

const connection = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"login_test"
});
connection.connect(function(error) {
    if (error) {
        throw error;
    } else {
        console.log('database connected');
    }
})
module.exports = connection;