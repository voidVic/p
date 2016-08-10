
var express = require('express');
var nodemailer = require('nodemailer');
var smtpTransfer = require('nodemailer-smtp-transport');

var smtpTransport = nodemailer.createTransport(smtpTransfer({
  host: "smtp.mail.com",
  secureConnection: false,
  port: 587,
  auth: {
    user: "Ankit@doglover.com",
    pass: "badisnewgood"
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
        callbackError(err);
      }else{
        sendMailToSender(data);
        callbackSuccess(response);
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
  var body = "Name: "+data.name+"\nEmail: "+data.mail+"\n\nMessage"+data.message;
  return body;
}

module.exports.mail = mail;
