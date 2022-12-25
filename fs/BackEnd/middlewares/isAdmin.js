const mongoose = require('../../../services/mongo_db');
const user = require('../../../models/user');

function createUserIfNotExist(req, res, next) {

  user.findOne({ phone: req.body.phone })
    .then(data => {
      if (data == null) {
        var usernew = new user({
          phone: req.body.phone,
          country_code: req.body.country_code,
          creationip: req.ip
        })
        usernew.save()
          .then(data => {
            next();
          })
          .catch(err => {
            if (err.name == 'ValidationError') {
              return res.status(200).json({
                'response_code': 400,
                'message': 'Data validation error'
              });
            } else {
              console.log(err);
              return res.status(200).json({
                'response_code': 500,
                'message': 'Sorry something unexpected happened at our server, please try after sometime ' + err
              });
            }
          })
      } else {
        next();
      }
    })
    .catch(err => {
      console.log(err);
      return res.status(200).json({
        'response_code': 500,
        'message': 'Sorry something unexpected happened at our server, please try after sometime',
      });
    })
}

function validateUserExist(req, res, next) {

  user.findOne({ phone: req.body.phone })
    .then(data => {
      if (data == null) {
        return res.status(200).json({
          'response_code': 400,
          'message': 'Account not found'
        });
      } else {
        req.temp_user = data;
        next();
      }
    })
    .catch(err => {
      console.log(err);
      return res.status(200).json({
        'response_code': 500,
        'message': 'Sorry something unexpected happened at our server, please try after sometime'
      });
    })
}

function validateUserByIDAndToken(req, res, next) {

  user.findById(req.token.id)
    .then(data => {
      if (data == null) {
        return res.status(200).json({ 'response_code': 400, 'message': 'Account not found' });
      } else {
        if (!(data.token == req.oldtoken)) res.status(200).json({
          'response_code': 400,
          'message': 'Token error, please re-login'
        })
        req.temp_user = data;
        next();
      }
    })
    .catch(err => {
      console.log(err);
      return res.status(200).json({
        'response_code': 500,
        'message': 'Sorry something unexpected happened at our server, please try after sometime'
      });
    })
}

function validateUserByID(req, res, next) {

  user.findById(req.token.id)
    .then(data => {
      if (data == null) {
        return res.status(200).json({
          'response_code': 400,
          'message': 'Account not found'
        });
      } else {
        req.temp_user = data;
        next();
      }
    })
    .catch(err => {
      console.log(err);
      return res.status(200).json({
        'response_code': 500,
        'message': 'Sorry something unexpected happened at our server, please try after sometime'
      });
    })
}

module.exports = {
  createUserIfNotExist,
  validateUserExist,
  validateUserByIDAndToken,
  validateUserByID
};