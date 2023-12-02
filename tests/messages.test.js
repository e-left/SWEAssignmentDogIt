const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

const { conversationsGET, conversationsToUserIDDogTabIDGET, conversationsToUserIDDogTabIDPOST } = require("../service/MessageService.js")

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
});

test("GET all user conversations by function", async t => {
    // get call conversations    
    const result = await conversationsGET();
    // assert that we get two entries 
    t.is(result.length, 2);
    // get the first one
    const firstConversation = result[0];
    // check IDs and message
    t.is(firstConversation.preview, "Is the dog still available for adoption?");
    t.is(firstConversation.toUserID, 1234567);
    t.is(firstConversation.dogTabID, 1234567);
});

test("GET all user conversations", async t => {
    // make get request to mock server
    const { body, statusCode } = await t.context.got("conversations");
    // assert success status code
    t.is(statusCode, 200);
    // assert that we get two messages 
    t.is(body.length, 2);
    // get the first one
    const firstConversation = body[0];
    // check IDs and message
    t.is(firstConversation.preview, "Is the dog still available for adoption?");
    t.is(firstConversation.toUserID, 1234567);
    t.is(firstConversation.dogTabID, 1234567);
});

test("GET all messages from specific conversation about specific DogTab by function", async t => {
    t.pass();
});

test("GET all messages from specific conversation about specific DogTab", async t => {
    t.pass();
});

test("POST new message to specific user to specific conversation by function", async t => {
    t.pass();
});

test("POST new message to specific user to specific conversation", async t => {
    t.pass();
});
