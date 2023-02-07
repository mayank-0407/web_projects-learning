const express = require('express')
const bodyparser = require("body-parser");
var database = require('./database');
var router = express.Router();

const app = express()
const port = 3000

app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.post('/', (req, res) => {
    console.log(req.body)
    var user_email = req.body.Email;
    var user_fname = req.body.fname;
    var user_lname = req.body.lname;
    var user_pass = req.body.password;
    var user_pass2 = req.body.cpassword;

    console.log(user_email)

    var query = "INSERT INTO logintictac (id,fname, lname, email, password) VALUES(?,?,?,?,?);"
    database.query(query, [2,user_fname, user_lname, user_email, user_pass], function(error, data,field) {
        if (error) {
            console.error(error);
            res.send("An error occurred");
        } else {
            console.error(data);
            // res.send("SUCCESS");
        }
    });
    res.send('Successfully signed in')
});
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})