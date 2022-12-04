// const a = 13;
// const b = 12;

// if (a > b) {
//   console.log("A is greater than B");
// } else {
//   console.log("B is greater than or equal to A");
// }
const cowsay = require("cowsay");
const Quote = require('inspirational-quotes');

console.log(cowsay.say({
    text : Quote.getRandomQuote(),
    mode: 't'
}));