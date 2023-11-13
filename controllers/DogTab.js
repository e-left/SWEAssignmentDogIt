'use strict';

var utils = require('../utils/writer.js');
var DogTab = require('../service/DogTabService');

module.exports.dogtabsDogTabIDGET = function dogtabsDogTabIDGET (req, res, next, dogTabID) {
  DogTab.dogtabsDogTabIDGET(dogTabID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dogtabsGET = function dogtabsGET (req, res, next) {
  DogTab.dogtabsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dogtabsPOST = function dogtabsPOST (req, res, next, body) {
  DogTab.dogtabsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dogtabsPOST = function dogtabsPOST (req, res, next, body) {
  DogTab.dogtabsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dogtabsSavedDogTabIDDELETE = function dogtabsSavedDogTabIDDELETE (req, res, next, dogTabID) {
  DogTab.dogtabsSavedDogTabIDDELETE(dogTabID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dogtabsSavedDogTabIDPUT = function dogtabsSavedDogTabIDPUT (req, res, next, dogTabID) {
  DogTab.dogtabsSavedDogTabIDPUT(dogTabID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dogtabsSavedGET = function dogtabsSavedGET (req, res, next) {
  DogTab.dogtabsSavedGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dogtabsSexBreedAgeRangeLocationGET = function dogtabsSexBreedAgeRangeLocationGET (req, res, next, sex, breed, ageRange, location) {
  DogTab.dogtabsSexBreedAgeRangeLocationGET(sex, breed, ageRange, location)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
