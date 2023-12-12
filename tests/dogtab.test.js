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

test("GET posted dog tab by ID by function", async t => {
    // define parameters
    const id = 1234567;
    // get posted dog tab by ID
    const result = await dogtabsDogTabIDGET(id);
    // check some dogtab characteristics
    t.is(result.sex, "Male");
    t.is(result.name, "Rex");
    t.is(result.description, "Rex seeks a home");
    t.is(result.location, "Thessaloniki, Greece");
    t.is(result.breed, "Bulldog");
});

test("GET posted dog tab by ID", async t => {
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


test("GET all posted dog tabs by function", async t => {
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

test("GET all posted dog tabs", async t => {
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

test("POST new Dogtab by function", async t => {
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

test("POST new Dogtab", async t => {
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