const test = require('ava');

const { dogtabsDogTabIDGET, dogtabsGET, dogtabsPOST, 
    dogtabsSavedDogTabIDDELETE, dogtabsSavedDogTabIDPUT, 
    dogtabsSavedGET, dogtabsSexBreedAgeRangeLocationGET } = require("../service/DogTabService.js")

test("GET posted DogTab by ID by function", async t => {
    // define parameters
    const id = 1234567;
    // get posted DogTab by ID
    const result = await dogtabsDogTabIDGET(id);
    // check some dogtab characteristics
    t.is(result.sex, "Male");
    t.is(result.name, "Rex");
    t.is(result.description, "Rex seeks a home");
    t.is(result.location, "Thessaloniki, Greece");
    t.is(result.breed, "Bulldog");
});

test("GET all posted DogTabs by function", async t => {
    //get all dogtabs
    const result = await dogtabsGET();
    // assert that we get two entries 
    t.is(result.length, 2);
    // get the first one
    const firstDogtab = result[0];
    // check some dogtab characteristics
    t.is(firstDogtab.sex, "Male");
    t.is(firstDogtab.name, "Rex");
    t.is(firstDogtab.description, "Rex seeks a home");
    t.is(firstDogtab.location, "Thessaloniki, Greece");
    t.is(firstDogtab.breed, "Bulldog");
});

test("POST new DogTab by function", async t => {
    // define parameters
    const body = {
        "name": "Rex",
        "breed": "Bulldog",
        "sex": "Male",
        "mainPhoto": "",
        "otherPhotos": [
          ""
        ],
        "birthDate": "2023-12-12T11:37:48.618Z",
        "description": "Rex seeks a home",
        "location": "Thessaloniki, Greece"
    };
    // try to create dogtab
    try {
        await dogtabsPOST(body);
        t.pass();
    } catch (e) {
        // catch error
        t.fail(e);
    }
});

test("DELETE DogTab from own interest list by ID by function", async t => {
    // define parameters
    const id = 1234567;
    //try to delete DogTab from interest list
    try {
        await dogtabsSavedDogTabIDDELETE(id);
        t.pass();
    } 
    // catch error
    catch(e){
        t.fail(e);
    }
});

test("PUT DogTab into own interest list by ID by function", async t => {
    // define parameters
    const id = 1234567;
    //try to add DogTab in interest list
    try {
        await dogtabsSavedDogTabIDPUT(id);
        t.pass();
    } 
    // catch error
    catch(e){
        t.fail(e);
    }
});

test("GET all saved DogTabs by function", async t => {
    // get all saved DogTabs
    const result = await dogtabsSavedGET();
    // assert that we get two entries 
    t.is(result.length, 2);
    // get the first one
    const firstDogtab = result[0];
    // check some dogtab characteristics
    t.is(firstDogtab.sex, "Male");
    t.is(firstDogtab.name, "Rex");
    t.is(firstDogtab.description, "Rex seeks a home");
    t.is(firstDogtab.location, "Thessaloniki, Greece");
    t.is(firstDogtab.breed, "Bulldog");
});

test("GET DogTabs by filters by function", async t => {
    // define parameters
    const sex = "Male";
    const breed = "Bulldog";
    const ageRange = "1m0y - 0m10y";
    const location = "Thessaloniki";
    // get all filtered DogTabs
    const result = await dogtabsSexBreedAgeRangeLocationGET(sex, breed, ageRange, location);
    // assert that we get two entries 
    t.is(result.length, 2);
    // get the first one    
    const firstDogtab = result[0];
    // check some dogtab characteristics
    t.is(firstDogtab.sex, "Male");
    t.is(firstDogtab.location, "Thessaloniki, Greece");
    t.is(firstDogtab.breed, "Bulldog");
});