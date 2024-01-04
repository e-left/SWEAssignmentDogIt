// Initialization function for ResponsePayload
function ResponsePayload(code, payload) {
  this.code = code;
  this.payload = payload;
}

// Exporting function for ResponsePayload
exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
};

// Function that returns JSON payload
exports.writeJson = function(response, arg1, arg2) {
  //define variables
  let code = getCode(arg1, arg2);
  let payload = getPayload(arg1, arg2);

  //if it isn't string, make it string
  if (typeof payload !== 'string') {
    payload = JSON.stringify(payload, null, 2);
  }

  response.writeHead(code, { 'Content-Type': 'application/json' });
  response.end(payload);
};

//helper function to get the response code
function getCode(arg1, arg2) {
  if (arg1 instanceof ResponsePayload) {
    return arg1.code;
  } else if (Number.isInteger(arg1)) {
    return arg1;
  } else if (Number.isInteger(arg2)) {
    return arg2;
  }

  return 200; //default to 200 if no code is provided
}

//helper function to get the payload
function getPayload(arg1, arg2) {
  if (arg1 instanceof ResponsePayload) {
    return arg1.payload;
  } else {
    return arg1 || arg2; //use arg1 if available, otherwise use arg2
  }
}
