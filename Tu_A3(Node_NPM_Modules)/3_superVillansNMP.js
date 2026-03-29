const { default: allSupervillains, randomSupervillain } = require("supervillains");

// All super heros 
console.log("###################################################################");
console.log("List of Super Heros ...")
console.log(allSupervillains);
console.log("###################################################################");

// Random super hero 
console.log(`Randome Super Villain Name : ${randomSupervillain()}`);