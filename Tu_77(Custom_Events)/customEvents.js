const events = require('events');

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message,user)=>{
    console.log(`${user} : ${message}`);
});
emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent","That is pretty cool ", "Fitsum");

process.stdin.on("data", data=>{
  
     if(data.toString().trim() === "exit")
     {
         process.exit();
     }
     else
     {
         emitter.emit("customEvent",data.toString(),"Terminal");
     }

});