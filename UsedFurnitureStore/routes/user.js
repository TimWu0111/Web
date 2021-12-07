var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/vidzy');

var collection = db.get('furniture');

var order = db.get('order');

/*------------------------------------------------------------- 
	user operation
-------------------------------------------------------------*/
  
  /* cart page*/ 
router.get('/cart', function(req, res, next) {
  res.render('cart');
});

/* history page */
router.get('/history', function(req, res, next) {
  order.find({},function(err,history){
    if(err) throw err;
    //res.json(history);
    res.render('history', { results:history });
    });
});

/* detail of history */
router.get('/history/:id', function(req, res, next) {
  order.findOne({_id: req.params.id},function(err,history){
    if(err) throw err;
    res.json(history);
    });
});

/* purchase page */
 router.post('/cart/done', function(req, res, next) {
    order.insert({
      data:req.body.data,
      total:req.body.total
    },function(err,furniture){
      if(err) throw err;
      //if insert is successful
      res.redirect('/user/cart');
    });
  });

  /* user show an individual detail */
  router.get('/:id', function(req, res, next) {
    collection.findOne({_id: req.params.id},function(err,furniture){
      if(err) throw err;
      res.render('user_single', { furniture:furniture });
    });
  });

  /* get inventory */
router.get('/cart/retrieve', function(req, res, next) {
  collection.findOne({_id: req.query.id},function(err,video1){
	if(err) throw err;
	res.json(video1);
  });
});

  /* update inventory */
  router.post('/cart/update', function(req, res, next) {
    collection.update({_id:req.body.id},
    {$set:{
    quantity:req.body.quantity
    }}
    ,function(err,furniture){
      if(err) throw err;
      //if insert is successful
      res.redirect('/user/cart');
    });
  });

  module.exports = router;