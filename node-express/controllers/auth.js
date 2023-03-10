    const users = require("../models/user"); 
    const bodyparser = require("body-parser");
    const express = require('express')
    const app = express()   
    router.use(bodyparser.json({ extended: true }));

    const signupController = async(req,res) =>{
        console.log('signupController called');

        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password){
            res.status(403).send('Email and Passwords are required');
            return;
        }

        const id = Math.floor(Math.random()*1000);
        users.push({
            id,
            email,
            password
        })

        res.status(200).json({
            id
            
        })

    }
    const loginController = async(req,res) =>{
        console.log('loginController called');

        console.log(req);
        // console.log(item.email)
        var email = req.body.email;
        var password = req.password;

        if (!email || !password){
            res.status(403).send('Email and Passwords are required');
            return;
        }
        const user = users.find((item)=>item.email === email);
        if(!user){
            res.status(403).send('User not found');
            return;
        }


        if(users.password !== password){
            res.status(401).send('Incorrect password');
            return;
        }

        res.status(200).json(user)
    }

    module.exports = {signupController,loginController}