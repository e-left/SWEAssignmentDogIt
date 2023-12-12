const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

const { feedbackPOST } = require("../service/FeedbackService.js")

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
});

// Function to generate feedback body with variable content
function generateFeedback(content) {
    return {"content": content};
}

test("POST new feedback to developers by function", async t => {
    // define parameters
    const contents = ["", "I have found a bug!", "Bug!!".repeat(100)];
    // try to create feedback with various bodies
    for (const content of contents) {
        const body = generateFeedback(content);
        try {
            await feedbackPOST(body);
            t.pass(`Posted feedback: ${content}`);
        } catch (e) {
            t.fail(`Failed to post feedback (${content}): ${e.message}`);
        }
    }
});

test("POST new feedback to developers", async t => {
    // define parameters
    body = {"content": "I have found a bug!"};
    const { statusCode } = await t.context.got.post(`feedback`, {json: body});
    t.is(statusCode, 200);
});