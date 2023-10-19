
function encryptData(data){
    return 'EncryptedData';
}


//this will be mimmicing the https request module
function makeRequest(url , data){
    data = 'requestData';
    const encrptData = encryptData(data);
    console.log(`We will make a request to ${url} with the data ${encrptData}`);
}

module.exports = {
    makeRequest
}