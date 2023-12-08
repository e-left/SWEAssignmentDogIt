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
    // get call conversations    
    const result = await conversationsToUserIDDogTabIDGET();
    // assert that we get two entries 
    t.is(result.length, 2);
    // get the first one
    const firstConversation = result[0];
    // check IDs and message
    t.is(firstConversation.content, "When can we meet up?");
    t.is(firstConversation.toUserID, 1234567);
    t.is(firstConversation.fromUserID, 1234567);
});

test("GET all messages from specific conversation about specific DogTab", async t => {
    // make get request to mock server
    const { body, statusCode } = await t.context.got("conversations/1234567/1234567");
    // assert success status code
    t.is(statusCode, 200);
    // assert that we get two messages 
    t.is(body.length, 2);
    // get the first one
    const firstConversation = body[0];
    // check IDs and message
    t.is(firstConversation.content, "When can we meet up?");
    t.is(firstConversation.toUserID, 1234567);
    t.is(firstConversation.fromUserID, 1234567);
});

test("POST new message to specific user to specific conversation by function", async t => {
    // define parameters
    const fromUserID = 1234567;
    const toUserID = 1234567;
    const body = {"content": "Is this still available?"};
    // try to create message
    try {
        await conversationsToUserIDDogTabIDPOST(body, toUserID, fromUserID);
        t.pass();
    } catch (e) {
        // catch error
        t.fail(e);
    }
});

test("POST new message to specific user to specific conversation", async t => {
    // define parameters
    const fromUserID = 1234567;
    const toUserID = 1234567;
    const body = {"content": "Is this still available?"};
    const {statusCode} = await t.context.got.post(`conversations/${toUserID}/${fromUserID}`, {json: body});
    t.is(statusCode, 200);
});
