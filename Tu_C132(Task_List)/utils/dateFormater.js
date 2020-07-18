const { option } = require("yargs");

function dateFormater() {

    let day = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let dateFromat = day.toLocaleDateString("en-US", options);
    return dateFromat;

}

module.exports = dateFormater;