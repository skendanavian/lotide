const assertEqual = require("../assertEqual.js");

assertEqual(1, 1); //should pass
assertEqual(1, 5); // should fail
assertEqual("hello", "hello"); //should pass
assertEqual("hello", "goodbye");// should fail