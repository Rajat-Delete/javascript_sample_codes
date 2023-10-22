const internals = require('./internals');

console.log('internals' , internals);
internals.request.makeRequest('http://www.google.com');
internals.response.readResponse();