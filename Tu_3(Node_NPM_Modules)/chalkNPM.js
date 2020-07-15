const chalk = require("chalk");

// Test Text Color  
console.log(chalk.blue('This is Blue Text ..'));
console.log(chalk.green('This is Green Text ..'));
console.log(chalk.red('This is Red Text ..'));

// Testing Bg Color 
console.log(chalk.bgBlue('This is Blue Background ..'));
console.log(chalk.bgGreen('This is Green Background ..'));
console.log(chalk.bgRed('This is Red Background ..'));

// Other 
console.log(chalk.bold('This is Bold Text ..'));
console.log(chalk.dim('This is Dim Text ..'));
console.log(chalk.underline('This is Underline Text ..'));
console.log(chalk.green.bgRed.inverse('This is Inverse bg and text color of the Text ..'));