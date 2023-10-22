const axios = require('axios');

axios.get("https://www.google.com")
    .then((response)=>{
        console.log("data from google.com is", response.data);
    })
    .catch((error)=>{
        console.log("Error throwm from google.com is ", error.cause);
    }).then((value)=>{
        console.log("all Set!",value);
    })