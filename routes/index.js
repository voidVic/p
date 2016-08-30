var express = require('express');
var router = express.Router();

//var mailService = require('../appService/mailService').mail;
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Ankit' });
});

/*Mailer route*/
router.post('/sendMail', function(req, res){
  var contact = req.body;
 /* mailService.send(contact, function(data){
    res.json({"message": data});
  }, function(data){
    //console.log(data);
    res.json({"message": data});
  });*/
  /*testing msg, without actual mail*/
 setTimeout(function(){
   res.json({"message": {success: false, body: null}});
 }, 500);

});

module.exports = router;
