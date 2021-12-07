var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/vidzy');

var collection = db.get('furniture');

/* show all */
router.get('/', function(req, res, next) {
  collection.find({},function(err,furniture){
	if(err) throw err;
	res.json(furniture);
  });
});
/* find one */
router.get('/:id1', function(req, res, next) {
  collection.findOne({_id:req.params.id1},function(err,furniture){
	if(err) throw err;
	res.json(furniture);
  });
});

/* add a new video */
router.post('/', function(req, res, next) {
  collection.insert({
  title:req.body.title,
  genre:req.body.genre,
  description:req.body.description
  },function(err,furniture){
	if(err) throw err;
	//if insert is successful
	res.json(furniture);
  });
});

/* update an video */
router.put('/:id1', function(req, res, next) {
  collection.update({_id:req.params.id1},
  {$set:{
  title:req.body.title,
  genre:req.body.genre,
  description:req.body.description
  }}
  ,function(err,furniture){
	if(err) throw err;
	//if insert is successful
	res.json(furniture);
  });
});

/* delete a video */
router.delete('/:id1', function(req, res, next) {
  collection.remove({_id:req.params.id1},function(err,furniture1){
	if(err) throw err;
	res.json(furniture1);
  });
});


module.exports = router;
