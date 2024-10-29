// working with timers Async 

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = ()=> {
  currentTime += waitInterval;

  const percent = Math.floor((currentTime/waitTime)*100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ..${percent}%`);
//   console.log(`waiting ${currentTime/1000} seconds`);

};

console.log(`setting a ${waitTime/1000} second delay`);

const timerFinished = () =>{
    clearInterval(intervals);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Done!!");

}

// The Functions 

const intervals =  setInterval(incTime,waitInterval);
setTimeout(timerFinished,waitTime);