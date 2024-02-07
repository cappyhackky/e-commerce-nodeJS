const express = require('express')
const router = express.Router();
const con = require('../db-config')


router.get('/',(req, res)=>{
    if(req.session.loggedIn){
        if(req.session.type == 'admin'){ 
            res.render('adminDashboard');
        }
        else if(req.session.type == 'user'){
            con.query('SELECT * FROM users where user_id = "'+req.session.userid+'"', (err,result)=>{
                res.render('userDashboard',{result});
            });  
        }
    }
    else{
        res.render('user');
    }
});
 

module.exports = router;