const express = require('express')
const bodyparser = require("body-parser");
var database = require('./database');

var router = express.Router();
const app = express()
const port = 3000

app.use(bodyparser.urlencoded({ extended: true }));

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/login.html")
})
app.get('/tictac', (req, res) => {
    res.sendFile(__dirname + "/tictac_home.html")
})
// app.get('/tictac', (req, res) => {
//     if(req. isAuthenticated()){
//         res.sendFile(__dirname + "/tictac_home.html")}
//     else{
//         res.sendFile(__dirname + "/login.html")}
// })

app.post('/signup', (req, res) => {
    console.log(req.body)
    var user_email = req.body.Email;
    var user_fname = req.body.fname;
    var user_lname = req.body.lname;
    var user_pass = req.body.password;
    var user_pass2 = req.body.cpassword;

    console.log(user_email)
    if(user_pass !== user_pass2){
        console.log('both pass are not same');
        res.send('Passwords are not same');
    }

    var query = "INSERT INTO logintictac (fname, lname, email, pass) VALUES(?,?,?,?);"
    database.query(query, [user_fname, user_lname, user_email, user_pass], function(error, data,field) {
        if (error) {
            console.error(error);
            res.send("An error occurred");
        } else {
            console.error(data);
            // res.send("SUCCESS");
        }
    });
    res.send('Successfully Signed Up')
});

app.post('/login',(req,res)=>{
    console.log(req.body)
    var user_email = req.body.Email;
    var user_pass = req.body.password;

    var query = "select email,pass from logintictac where email=?;"
        database.query(query, [user_email], function(error, data,field) {
            if (error) {
                console.error(error);
                res.send("An error occurred");
            } 
            else {
                console.log(data);
                if (data[0].pass==user_pass)
                {
                    // res.redirect('/tictac');
                    res.sendFile(__dirname + "/tictac_home.html")
                    // res.send("SUCCESS");
                    // res.send('Successfully Logged In')
                }
                else{
                    res.send("incorrect pass");
                }
            }
        });
})
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})