var express = require("express");

var User = require('../models/user')

    router = express.Router();

    router.get('/', function (req, res) {
      User.find(function(err, users){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(users)
      })
    });

    router.post('/', function (req, res) {
      var user = new User({ ID : "insertTest", PWD : "test"});

      user.save(function(err, user){
        if(err) return console.error(err);
        else console.log('post success');
      });
    })

    router.get('/:user_id/', function (req, res) {
      User.findOne({_id: req.params.user_id},function(err, user){
        if(err) return console.error(err);
        else res.json(user)
      });
    })

module.exports = router;
