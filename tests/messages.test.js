const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');


// const { booksGET } = require('../service/DefaultService.js');
// const app = require('../index.js');

test('Random test', t => {
    t.pass();
});

const addNumbers = (a,b) => a + b;

test('Add numbers', t => {
    t.is(addNumbers(1,2), 3);
    t.is(addNumbers(3,5), 8);
    t.is(addNumbers(-1,2), 1);
    t.is(addNumbers(0,0), 0);
    t.is(addNumbers(0,2), 2);
    t.is(addNumbers("1", "2"), "12");
    t.is(addNumbers("1", 2), "12");
    t.is(addNumbers(undefined, 2), NaN);
    t.is(addNumbers(), NaN);
});

test('Async', async t => {
    const res = Promise.resolve('test');
    t.is(await res, 'test');
});

// test('GET books by function', async t => {
//     const result = await booksGET();
//     t.is(result.length, 2);
//     t.is(result[0].title, "title");
// });

// test.before(async (t) => {
//     t.context.server = http.createServer(app);
//     t.context.prefixUrl = await listen(t.context.server);
//     t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
// });

// test.after.always((t) => {
//     t.context.server.close();
// });

// test('GET books', async (t) => {
//     const { body, statusCode } = await t.context.got("books");
//     t.is(body.length, 2);
//     t.is(body[0].title, 'title');
//     t.is(statusCode, 200);
// });
