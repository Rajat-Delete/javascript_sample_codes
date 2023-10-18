const https = require('https');


//calling on www.google.com
const request = https.request('https://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log('The chunk of data from url is',chunk);
    });

    res.on('end',()=>{
        console.log('no more data');
    })
});

request.end();

