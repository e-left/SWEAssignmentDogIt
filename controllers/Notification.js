'use strict';

var utils = require('../utils/writer.js');
var Notification = require('../service/NotificationService');

module.exports.notificationsDELETE = function notificationsDELETE (req, res, next) {
  Notification.notificationsDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsGET = function notificationsGET (req, res, next) {
  Notification.notificationsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsNotificationIDDELETE = function notificationsNotificationIDDELETE (req, res, next, notificationID) {
  Notification.notificationsNotificationIDDELETE(notificationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
