var express = require('express');
var router = express.Router();
var User=require("../model/User");
var redis=require("redis");
var redis_client=redis.createClient(6379,'localhost');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User');
});

router.get('/all',function(req,res){
  console.log("getting users list");
  var user1=new User(1,"barath");
  redis_client.get("users",function(err,value){
      if(value !=null){
          console.log("loading from cache");
        return res.json(JSON.stringify(value));
      }else{
          console.log("loading from cache");
          redis_client.set("users", JSON.stringify(user1), redis.print);
          return res.json(JSON.parse(user1))
      }
  });


});

module.exports = router;
