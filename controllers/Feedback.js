'use strict';

var utils = require('../utils/writer.js');
var Feedback = require('../service/FeedbackService');

//function that creates a new feedback message
module.exports.feedbackPOST = function feedbackPOST (req, res, next, body) {
  //call service method
  Feedback.feedbackPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
