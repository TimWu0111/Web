var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');

var monk = require('monk');
var db = monk('localhost:27017/vidzy');

var accounts = db.get('accounts');

module.exports = router;