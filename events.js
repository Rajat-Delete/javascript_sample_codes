const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on('New Movie Launched' , ()=>{
    console.log("hey This Friday watch my movie in threaters!!");
});

celebrity.on('New Movie Launched' , ()=>{
    console.log("hey This Saturday watch my movie in threaters!!");
});

celebrity.on('New Movie Launched' , ()=>{
    console.log("hey This Sunday watch my movie in threaters!!");
});

celebrity.on('New Movie',(data)=>{
    console.log(`The New Movie for this Friday is ${data}`);
});

process.on('exit',(code)=>{
    console.log('The Program has exited with code',code);
} )

celebrity.emit('New Movie Launched');
celebrity.emit('Personal Trip');
celebrity.emit('New Movie','Jawan');
