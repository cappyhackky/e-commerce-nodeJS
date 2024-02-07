const express = require('express')
const con = require('../db-config')
const bcrypt = require('bcrypt')
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('userLogin');
});

router.post('/', (req, res)=>{
    const {email, password} = req.body;
    if (email && password) {
        con.query("SELECT * FROM users WHERE email = ? " , [email], (error, result)=>{
            if(error) throw error;
            if (result.length>0) {
                bcrypt.compare(password, result[0].password, (err, isTrue)=>{
                    if(req.body.email == result[0].email && isTrue ){
                         req.session.message = {
                            type : 'success',
                            message : `Welcome ${result[0].user_name} !`
                        }
                        req.session.loggedIn = true; 
                        req.session.type = 'user';
                        req.session.userid = result[0].user_id;
                        res.redirect('userDashboard');
                    }
                    else{
                        req.session.message = {
                            type : 'warning',
                            message : 'Invalid Password !'
                        }
                        res.redirect('userLogin');
                    }
                });
            }
            else{
                req.session.message = {
                    type : 'warning',
                    message : 'Invalid Username !'
                }
                res.redirect('userLogin');
            }
        });
        
    } else {
        req.session.message = {
            type : 'danger',
            message : 'Fields cannot be left empty!'
        }
        res.redirect('userLogin');
    }
});


module.exports = router;