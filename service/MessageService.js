'use strict';


/**
 * Get all own conversations
 * FR9 - The logged-in user must be able see a list with all their personal messages. <br>
 *
 * returns List
 **/
exports.conversationsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "preview" : "Is the dog still available for adoption?",
  "toUserID" : 1234567,
  "dogTabID" : 1234567
}, {
  "preview" : "Is the dog still available for adoption?",
  "toUserID" : 1234567,
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
 * Get all messages from a conversation with a user with a specific ID for a specific DogTab
 * FR7 - The logged-in user must be able to message other logged-in users, through their posted dog tabs.  <br> FR8 - The notifications' system must notify the logged-in user for new messages. <br>
 *
 * toUserID Long User ID the message is sent to
 * dogTabID Long Dog tab's ID conversation is about
 * returns List
 **/
exports.conversationsToUserIDDogTabIDGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "fromUserID" : 1234567,
  "toUserID" : 1234567,
  "content" : "When can we meet up?"
}, {
  "fromUserID" : 1234567,
  "toUserID" : 1234567,
  "content" : "When can we meet up?"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send message to user with a specific ID for a specific DogTab
 * FR7 - The logged-in user must be able to message other logged-in users, through their posted dog tabs.    <br> FR9 - The logged-in user must be able see a list with all their personal messages. <br>
 *
 * body MessageContent Message content (optional)
 * toUserID Long User ID the message is sent to
 * dogTabID Long Dog tab's ID conversation is about
 * no response value expected for this operation
 **/
exports.conversationsToUserIDDogTabIDPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

