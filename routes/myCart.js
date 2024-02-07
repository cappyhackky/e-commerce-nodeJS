const express = require('express')
const router = express.Router();
const con = require('../db-config')
router.get('/', async(req, res)=>{
    const qry = `SELECT * FROM product INNER JOIN (SELECT * from cart WHERE user_id = ${req.session.userid} )as cart ON product.product_id = cart.product_id; `
    con.query(qry,  (err, data)=>{
        if(err) throw err;    
        res.render('myCart',{data});
    })
});

router.post('/',(req, res)=>{
    console.log(req.body );
    if(req.body.delete){
        const query = `DELETE from cart WHERE product_id = ${req.body.productId}`
        con.query(query, (err)=>{
            if(err)throw err;
        });
    }
    else if(req.body.update){
        const query = `UPDATE cart SET order_qty = ${req.body.qty} WHERE product_id = ${req.body.productId}`
        con.query(query, (err)=>{
            if(err)throw err;       
        });
    }  
    else if (req.body.order) {
        console.log(req.body);
    }
    res.redirect('myCart')
})
    
module.exports = router;