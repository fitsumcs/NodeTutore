const { default: allSuperheroes, randomSuperhero } = require("superheroes");

// All super heros 
console.log("###################################################################");
console.log("List of Super Heros ...")
console.log(allSuperheroes);
console.log("###################################################################");

// Random super hero 
console.log(`Randome Super Hero Name : ${randomSuperhero()}`);