'use strict';

var utils = require('../utils/writer.js');
var DogTab = require('../service/DogTabService');

//function that returns posted DogTabs by ID 
module.exports.dogtabsDogTabIDGET = function dogtabsDogTabIDGET (req, res, next, dogTabID) {
  //call service method
  DogTab.dogtabsDogTabIDGET(dogTabID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//function that returns all posted DogTabs
module.exports.dogtabsGET = function dogtabsGET (req, res, next) {
  //call service method
  DogTab.dogtabsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//function that creates a new DogTab
module.exports.dogtabsPOST = function dogtabsPOST (req, res, next, body) {
  //call service method
  DogTab.dogtabsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//function that deletes a saved DogTab from the interest list by ID
module.exports.dogtabsSavedDogTabIDDELETE = function dogtabsSavedDogTabIDDELETE (req, res, next, dogTabID) {
  //call service method
  DogTab.dogtabsSavedDogTabIDDELETE(dogTabID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//function that adds a DogTab to own interest list by ID
module.exports.dogtabsSavedDogTabIDPUT = function dogtabsSavedDogTabIDPUT (req, res, next, dogTabID) {
  //call service method
  DogTab.dogtabsSavedDogTabIDPUT(dogTabID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//function that returns all saved DogTabs
module.exports.dogtabsSavedGET = function dogtabsSavedGET (req, res, next) {
  //call service method
  DogTab.dogtabsSavedGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//function that returns filtered DogTabs
module.exports.dogtabsSexBreedAgeRangeLocationGET = function dogtabsSexBreedAgeRangeLocationGET (req, res, next) {
  //call service method
  DogTab.dogtabsSexBreedAgeRangeLocationGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
