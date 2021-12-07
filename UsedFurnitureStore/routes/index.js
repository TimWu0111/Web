var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');

var monk = require('monk');
var db = monk('localhost:27017/vidzy');

var collection = db.get('furniture');
var accounts = db.get('accounts');


router.use(passport.initialize());

/*------------------------------------------------------------- 
	unknow user operation
-------------------------------------------------------------*/

/* register page*/
router.get('/register', function(req, res, next) {
  res.render('register');
}); 

/* user page*/
router.get('/user', isLoggedIn, function(req, res, next) {
  if(req.query.stitle==null && req.query.genres==null){
    collection.find({},function(err,furniture){
    if(err) throw err;
    //res.json(furniture);
    res.render('user', { results:furniture });
    });
  }
  else if(req.query.stitle && req.query.genres){
    
    collection.find({ $and:[ {genre:{$in:req.query.genres}}, {title: {$regex: req.query.stitle, $options: '$i'} }]},function(err,furniture){
    if(err) throw err;
    res.json(furniture);
    //res.render('index', { results:furniture });
    });
  }
  else if(req.query.stitle && req.query.genres==null){
      collection.find({title: {$regex: req.query.stitle, $options: '$i'}},function(err,furniture){
      if(err) throw err;
      res.json(furniture);
      //res.render('index', { results:furniture });
      });
  }
  else if(req.query.stitle==null && req.query.genres){
    collection.find({ genre:{$in:req.query.genres} },function(err,furniture){
    if(err) throw err;
    res.json(furniture);
    //res.render('index', { results:furniture });
    
    });
  }
});


/* admin page*/
router.get('/admin', isLoggedIn, function(req, res, next) {
  if(req.query.stitle==null && req.query.genres==null){
    collection.find({},function(err,furniture){
    if(err) throw err;
    //res.json(furniture);
    res.render('admin', { results:furniture });
    });
  }
  else if(req.query.stitle && req.query.genres){
    
    collection.find({ $and:[ {genre:{$in:req.query.genres}}, {title: {$regex: req.query.stitle, $options: '$i'} }]},function(err,furniture){
    if(err) throw err;
    res.json(furniture);
    //res.render('index', { results:furniture });
    });
  }
  else if(req.query.stitle && req.query.genres==null){
      collection.find({title: {$regex: req.query.stitle, $options: '$i'}},function(err,furniture){
      if(err) throw err;
      res.json(furniture);
      //res.render('index', { results:furniture });
      });
  }
  else if(req.query.stitle==null && req.query.genres){
    collection.find({ genre:{$in:req.query.genres} },function(err,furniture){
    if(err) throw err;
    res.json(furniture);
    //res.render('index', { results:furniture });
    
    });
  }
});

router.get('/accounts', function(req, res, next) {
  accounts.find({},function(err,accounts){
    if(err) throw err;
    res.json(accounts);
  });
});

/* index page */
router.get('/', function(req, res, next) {
  if(req.query.stitle==null && req.query.genres==null){
    collection.find({},function(err,furniture){
    if(err) throw err;
    //res.json(furniture);
    res.render('index', { results:furniture });
    });
  }
  else if(req.query.stitle && req.query.genres){
    
    collection.find({ $and:[ {genre:{$in:req.query.genres}}, {title: {$regex: req.query.stitle, $options: '$i'} }]},function(err,furniture){
    if(err) throw err;
    res.json(furniture);
    //res.render('index', { results:furniture });
    });
  }
  else if(req.query.stitle && req.query.genres==null){
      collection.find({title: {$regex: req.query.stitle, $options: '$i'}},function(err,furniture){
      if(err) throw err;
      res.json(furniture);
      //res.render('index', { results:furniture });
      });
  }
  else if(req.query.stitle==null && req.query.genres){
    collection.find({ genre:{$in:req.query.genres} },function(err,furniture){
    if(err) throw err;
    res.json(furniture);
    //res.render('index', { results:furniture });
    
    });
  }
  
});

/* register new user*/
router.post("/register", function(req, res){
  Account.register(new Account({ username: req.body.username }), req.body.password, function(err, user){
      if(err){
          console.log(err);
          return res.render("register");
      }
      passport.authenticate("local")(req, res, function(){
          res.redirect("/login");
      });
  });
});

/* Login page */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* login user and admin*/
router.post("/login", passport.authenticate("local",{
  failureRedirect: "/login"
}), function(req, res){
  if(req.body.username=="admin"){
    res.redirect("/admin");
  }else{
    res.redirect("/user");
  }
});

/* show an individual detail */
router.get('/:id', function(req, res, next) {
  collection.findOne({_id: req.params.id},function(err,furniture){
	if(err) throw err;
	res.render('single', { furniture:furniture });
  });
});

// Logout
router.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

// check isLoggedIn
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      return next();
  }
  res.redirect("/login");
}

module.exports = router;
