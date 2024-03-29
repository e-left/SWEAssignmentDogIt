'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

//function that returns all user conversations
module.exports.conversationsGET = function conversationsGET (req, res, next) {
  //call service method
  Message.conversationsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//function that returns all messages from a specific conversation about a specific DogTab
module.exports.conversationsToUserIDDogTabIDGET = function conversationsToUserIDDogTabIDGET (req, res, next) {
  //call service method
  Message.conversationsToUserIDDogTabIDGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//function that creates a new message to a specific user in a specific conversation
module.exports.conversationsToUserIDDogTabIDPOST = function conversationsToUserIDDogTabIDPOST (req, res, next) {
  //call service method
  Message.conversationsToUserIDDogTabIDPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
