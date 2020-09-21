const assertEqual = require("../assertEqual.js")
const tail = require("../tail.js")

const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");