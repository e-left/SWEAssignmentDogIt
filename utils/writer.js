//initialisation function for ResponsePayload
var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

//exporting function for ResponsePayload
exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

//function that returns json payload
var writeJson = exports.writeJson = function(response, arg1, arg2) {
  //define variables
  var code;
  var payload;

  //check if arg1 exists and is a ResponsePayload object
  //if yes, call function with response and destructured ResponsePayload object
  if(arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  //check which is code and which is payload
  if(arg2 && Number.isInteger(arg2)) {
    code = arg2;
  }
  else {
    if(arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  }
  if(code && arg1) {
    payload = arg1;
  }
  else if(arg1) {
    payload = arg1;
  }

  if(!code) {
    // if no response code given, we default to 200
    code = 200;
  }
  if(typeof payload === 'object') {
    //if isn't string, make it string
    payload = JSON.stringify(payload, null, 2);
  }
  response.writeHead(code, {'Content-Type': 'application/json'});
  response.end(payload);
}
