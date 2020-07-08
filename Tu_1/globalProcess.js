// The process global objcet 

console.log(process.pid);
console.log(process.versions.node);

// Argument from cmd
// Collect information from terminal  
console.log(process.argv);
// Destructering 
const [,,firsname,secondname]  = process.argv;

console.log(`You Name is ${firsname} ${secondname}`)
 // Grab 
function grab(flag)
{
   let indexAfteFlag = process.argv.indexOf(flag)  + 1 ;
   return process.argv[indexAfteFlag];   
}
// Proving flags 
const greeting = grab("--greeting");
const user = grab("--user");

console.log(greeting,user );

