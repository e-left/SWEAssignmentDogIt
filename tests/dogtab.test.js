const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

const { dogtabsDogTabIDGET, dogtabsGET, dogtabsPOST, 
    dogtabsSavedDogTabIDDELETE, dogtabsSavedDogTabIDPUT, 
    dogtabsSavedGET, dogtabsSexBreedAgeRangeLocationGET } = require("../service/DogTabService.js")

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
});

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

test("GET posted DogTab by ID", async t => {
    // define parameters
    const id = 1234567;
    const { body, statusCode } = await t.context.got(`dogtabs/${id}`);
    // assert success status code
    t.is(statusCode, 200);
    // check some dogtab characteristics
    t.is(body.sex, "Male");
    t.is(body.name, "Rex");
    t.is(body.description, "Rex seeks a home");
    t.is(body.location, "Thessaloniki, Greece");
    t.is(body.breed, "Bulldog");
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

test("GET all posted DogTabs", async t => {
    const { body, statusCode } = await t.context.got("dogtabs");
    // assert success status code
    t.is(statusCode, 200);
    // assert that we get two messages 
    t.is(body.length, 2);
    // get the first one
    const firstDogtab = body[0];
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

test("POST new DogTab", async t => {
    // define parameters
    const body = {
        "name": "Rex",
        "breed": "Bulldog",
        "sex": "Male",
        "mainPhoto": "",
        "otherPhotos": [
          ""
        ],
        "birthDate": "2023-12-12T11:37:48.6182Z",
        "description": "Rex seeks a home",
        "location": "Thessaloniki, Greece"
    };
    const { statusCode } = await t.context.got.post(`dogtabs`, {json: body});
    t.is(statusCode, 200);
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

test("DELETE DogTab from own interest list by ID", async t => {
    // define parameters
    const id = 1234567;
    const body = {
        "name": "Rex",
        "breed": "Bulldog",
        "sex": "Male",
        "mainPhoto": "",
        "otherPhotos": [
          ""
        ],
        "birthDate": "2023-12-12T11:37:48.6182Z",
        "description": "Rex seeks a home",
        "location": "Thessaloniki, Greece"
    };
    //try to delete DogTab from interest list
    const { statusCode } = await t.context.got.delete(`dogtabs/saved/${id}`, {json: body});
    //check we got desired status code
    t.is(statusCode, 200);
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

test("PUT DogTab into own interest list by ID", async t => {
    // define parameters
    const id = 1234567;
    const body = {
        "name": "Rex",
        "breed": "Bulldog",
        "sex": "Male",
        "mainPhoto": "",
        "otherPhotos": [
          ""
        ],
        "birthDate": "2023-12-12T11:37:48.6182Z",
        "description": "Rex seeks a home",
        "location": "Thessaloniki, Greece"
    };
    //try to add DogTab in interest list
    const { statusCode } = await t.context.got.put(`dogtabs/saved/${id}`, {json: body});
    //check we got desired status code
    t.is(statusCode, 200);
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

test("GET all saved DogTabs", async t => {
    // make get request to mock server
    const { body, statusCode } = await t.context.got(`dogtabs/saved`);
    // assert success status code
    t.is(statusCode, 200);
    // assert that we get two entries 
    t.is(body.length, 2);
    // get the first one
    const firstDogTab = body[0];
    // check some dogtab characteristics
    t.is(firstDogTab.sex, "Male");
    t.is(firstDogTab.name, "Rex");
    t.is(firstDogTab.description, "Rex seeks a home");
    t.is(firstDogTab.location, "Thessaloniki, Greece");
    t.is(firstDogTab.breed, "Bulldog");
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

test("GET DogTabs by filters", async t => {
    // define parameters
    const sex = "Male";
    const breed = "Bulldog";
    const ageRange = "1m0y - 0m10y";
    const location = "Thessaloniki";
    // make get request to mock server
    const { body, statusCode } = await t.context.got(`dogtabs/${sex}/${breed}/${ageRange}/${location}`);
    // assert success status code
    t.is(statusCode, 200);
    // assert that we get two entries 
    t.is(body.length, 2);
    // get the first one
    const firstDogTab = body[0];
    // check some dogtab characteristics
    t.is(firstDogTab.sex, "Male");
    t.is(firstDogTab.location, "Thessaloniki, Greece");
    t.is(firstDogTab.breed, "Bulldog");
});

