var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/vidzy');

var collection = db.get('furniture');

/*------------------------------------------------------------- 
	admin operation
-------------------------------------------------------------*/



/* admin page*/ 
/*router.get('/', function(req, res, next) {
    collection.find({},function(err,furniture){
      if(err) throw err;
      res.render('admin', { results:furniture });
      });
  });*/
  
  /* new page*/ 
  router.get('/new', function(req, res, next) {
    res.render('new');
  });
  
  /* admin add a new video */
  router.post('/add', function(req, res, next) {
    collection.insert({
    title:req.body.title,
    genre:req.body.genre,
    image:req.body.image,
    description:req.body.description,
    quantity:req.body.quantity,
    price:req.body.price
    },function(err,furniture){
      if(err) throw err;
      //if insert is successful
      res.redirect('/admin');
    });
  });
  
  /* admin show an individual detail */
  router.get('/:id', function(req, res, next) {
    collection.findOne({_id: req.params.id},function(err,furniture){
      if(err) throw err;
      res.render('show', { furniture:furniture });
    });
  });
  
  /* admin edit page*/
  router.get('/:id/edit', function(req, res, next) {
    collection.findOne({_id: req.params.id},function(err,furniture){
      if(err) throw err;
      res.render('edit', { furniture:furniture });
      });
  });
  
  /* admin update an video */
  router.post('/:id1', function(req, res, next) {
    collection.update({_id:req.params.id1},
    {$set:{
    title:req.body.title,
    genre:req.body.genre,
    image:req.body.image,
    description:req.body.description,
    quantity:req.body.quantity,
    price:req.body.price
    }}
    ,function(err,furniture){
      if(err) throw err;
      //if insert is successful
      res.redirect('/admin/'+req.params.id1);
    });
  });
  
  /* admin delete */
  router.get('/delete/:id1', function(req, res, next) {
    collection.remove({_id:req.params.id1},function(err,furniture){
      if(err) throw err;
      res.redirect('/admin');
    });
  });
  
  module.exports = router;