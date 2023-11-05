'use strict';


/**
 * Clear all own notifications
 * FR6 - The notifications' system must notify the logged-in when the status of a dog tab in the interest list changes.  <br>
 *
 * no response value expected for this operation
 **/
exports.notificationsDELETE = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * View all own notifications
 * FR6 - The notifications' system must notify the logged-in when the status of a dog tab in the interest list changes.  <br>
 *
 * returns List
 **/
exports.notificationsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isAdopted" : true,
  "notificationID" : 1234567,
  "dogTabID" : 1234567
}, {
  "isAdopted" : true,
  "notificationID" : 1234567,
  "dogTabID" : 1234567
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Clear own notification by ID
 * FR6 - The notifications' system must notify the logged-in when the status of a dog tab in the interest list changes.  <br>
 *
 * notificationID Long Notification's ID to get cleared
 * no response value expected for this operation
 **/
exports.notificationsNotificationIDDELETE = function(notificationID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

