// working with timers Async 

const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = ()=> {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime/1000} seconds`);

};

console.log(`setting a ${waitTime/1000} second delay`);

const timerFinished = () =>{
    clearInterval(intervals);
    console.log("Done!!");

}

// The Functions 

const intervals =  setInterval(incTime,waitInterval);
setTimeout(timerFinished,waitTime);