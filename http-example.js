//code to get all the data from http module in a single str
const {get , request} = require('https');

var str = '';
var icicidata = '';
//calling on www.google.com
const req = request('https://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
       str = str + chunk;
    });

    res.on('end',()=>{
        console.log('no more data');
        console.log('request data = ',str);
    })
});

req.end();


//In case of Https also , we will recieve similar kind of data but it will be decrypted by Node

//Doing same by get function instead of Https

get('https://www.icicibank.com',(res)=>{
    res.on('data' , (chunk)=>{
        icicidata = icicidata + chunk;
    })
    res.on('end' , ()=>{
        console.log('response from icici is ',icicidata);
    })
})
