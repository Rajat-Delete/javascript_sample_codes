const request = require('./custom-request');
const response = require('./custom-response');

function callHttpsModue(){
    request.makeRequest('dummmy Url',{testingData : 'OK'});
    const resp = response.readResponse();
    console.log(resp);
}

callHttpsModue();

console.log(require.cache);