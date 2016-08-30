
var express = require('express');
var nodemailer = require('nodemailer');
//var smtpTransfer = require('nodemailer-smtp-transport');
//var mg = require('nodemailer-mailgun-transport');

var smtpTransport = nodemailer.createTransport(mg({
  // host: "smtp.mailgun.org",
  // secureConnection: false,
  // port: 587,
  // auth: {
  //   user: "Ankit@doglover.com",
  //   pass: ""
  // }
  auth: {
    api_key: 'key-d4ab303978ad61cd30c86e998d8e5ac3',
    domain: 'sandbox57673ac294ed41d3aea4c079048f5e1f.mailgun.org'
  }
}));

var mail = {
  send: function(data, callbackSuccess, callbackError){
    var mailBody = writeMailbody(data);
    var mailOptions = {
      from: "Ankit@doglover.com",
      to: "vicnwz@gmail.com",
      subject: "Mail from "+ data.name,
      text: mailBody
    };
    smtpTransport.sendMail(mailOptions, function(err, response){
      if(err){
        callbackError({success: false, body: err});
      }else{
        //sendMailToSender(data);
        callbackSuccess({success: true, body: response});
      }
    });
  }
}

var sendMailToSender = function(data){
  var mailOptions = {
    from: "ankit@doglover.com",
    to: data.mail,
    subject: "Mail Received (Do not Reply)",
    text: "Hello "+data.name+",\n\n I've received your mail and will reply to you asap.\n\n\n *Note: This is an auto generated mail. Please do not reply to this mail."
  };

  smtpTransport.sendMail(mailOptions, function(err, response){
    if(err){
    //  callbackError(err);
    }else{
    //  callbackSuccess(response);
    }
  });
}

var writeMailbody = function(data){
  var body = "Hi Vicky, "+data.name+" sent you an Email.\n\n Email : "+data.mail+"\n\nMessage: "+data.message;
  return body;
}

module.exports.mail = mail;
