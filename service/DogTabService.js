'use strict';

//helper function to generate example data
function generateExampleData() {
  return {
    "sex": "Male",
    "name": "Rex",
    "mainPhoto": "",
    "description": "Rex seeks a home",
    "location": "Thessaloniki, Greece",
    "dogTabID": 1234567,
    "otherPhotos": ["", ""],
    "birthDate": "2000-01-23T04:56:07.000+00:00",
    "breed": "Bulldog"
  };
}

/**
 * View DogTab by ID
 * FR3 - The logged-in user must be able to see all the posted dog tabs.  <br>
 *
 * dogTabID Long Dog tab's ID to get
 * returns dogTabsView
 **/
exports.dogtabsDogTabIDGET = function(dogTabID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = generateExampleData();
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View all user's DogTabs available for adoption
 * FR3 - The logged-in user must be able to see all the posted dog tabs.  <br>
 *
 * returns List
 **/
exports.dogtabsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [generateExampleData(), generateExampleData()];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create new DogTab
 * FR1 - The logged-in user must be able to create a new dog tab, to put a dog up for adoption.  <br>
 *
 * body DogTabsCreate Information needed to create a DogTab (optional)
 * no response value expected for this operation
 **/
exports.dogtabsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

/**
 * Remove DogTab (by ID) from own saved/interest list
 * FR5 - The logged-in user must be able to manage a personal interest list for dog tabs.  <br>
 *
 * dogTabID Long Dog tab's ID to remove from saved list
 * no response value expected for this operation
 **/
exports.dogtabsSavedDogTabIDDELETE = function(dogTabID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add DogTab (by ID) into own saved/interest list
 * FR5 - The logged-in user must be able to manage a personal interest list for dog tabs.  <br>
 *
 * dogTabID Long Dog tab's ID to add saved list
 * no response value expected for this operation
 **/
exports.dogtabsSavedDogTabIDPUT = function(dogTabID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * View all saved DogTabs in interest list
 * FR5 - The logged-in user must be able to manage a personal interest list for dog tabs.  <br>
 *
 * returns List
 **/
exports.dogtabsSavedGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [generateExampleData(), generateExampleData()];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get filtered, available for adoption, DogTabs
 * FR3 - The logged-in user must be able to see all the posted dog tabs.  <br> FR4 - The logged-in user must be able to search for a dog tab using search filters. <br>
 *
 * sex String Sex filter
 * breed String Breed filter
 * ageRange String Age range filter
 * location String Location filter
 * returns List
 **/
exports.dogtabsSexBreedAgeRangeLocationGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [generateExampleData(), generateExampleData()];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}