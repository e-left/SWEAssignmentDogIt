'use strict';

var utils = require('../utils/writer.js');
var Feedback = require('../service/FeedbackService');

module.exports.feedbackPOST = function feedbackPOST (req, res, next, body) {
  Feedback.feedbackPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
