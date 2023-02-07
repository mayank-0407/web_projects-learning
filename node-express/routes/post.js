const router = require('express').Router();

router.get('/',(req,res) =>{
    res.json({
        id: "2323",
        title: "title",
        imgURL: "last"
    })
})

router.post('/all',(req,res) =>{})

module.exports = router;