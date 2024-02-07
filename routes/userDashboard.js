const express = require('express')
const router = express.Router();
const con = require('../db-config')

router.get('/',(req, res)=>{
    con.query('SELECT * FROM users where user_id = "'+req.session.userid+'"', (err,result)=>{
        console.log(result);
        res.render('userDashboard', {result});
    });
});
module.exports = router;