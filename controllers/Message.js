'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.conversationsGET = function conversationsGET (req, res, next) {
  Message.conversationsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.conversationsToUserIDDogTabIDGET = function conversationsToUserIDDogTabIDGET (req, res, next, toUserID, dogTabID) {
  Message.conversationsToUserIDDogTabIDGET(toUserID, dogTabID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.conversationsToUserIDDogTabIDPOST = function conversationsToUserIDDogTabIDPOST (req, res, next, body, toUserID, dogTabID) {
  Message.conversationsToUserIDDogTabIDPOST(body, toUserID, dogTabID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.conversationsToUserIDDogTabIDPOST = function conversationsToUserIDDogTabIDPOST (req, res, next, body, toUserID, dogTabID) {
  Message.conversationsToUserIDDogTabIDPOST(body, toUserID, dogTabID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
