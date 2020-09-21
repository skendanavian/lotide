# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @s-nissen/lotide`

**Require it:**

`const _ = require('@s-nissen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `assertArraysEqual(actual, expected)`: Arrays: Compares two arrays for equality and console logs a pass or fail message.
* `assertEqual(actual, expected)`: Primitives: Compares two primitive data types for equality and console.logs a pass or fail message.
* `assertObjectsEqual(actual, expected)`: Objects: Compares two objects for equality. Console.logs pass or fail message. 
* `countLetters()`: Counts each letter in a given string and returns an object with a count of the number of times each letter appears. 
* `countOnly(array, item)`: Counts the number of times a provided item appears in a provided array.  
* `eqArrays(array1, array2)`:Compares two arrays for exact equality. Returns a boolean. 
* `eqObjects(obj1, obj2)`: Checks that two objects contain the same key value pairs. Returns a boolean.
* `findKey(obj, callback)`: Objects: Searches an obj based on provided callback function and returns the first key with a value match. 
* `findKeyByValue(obj, value)`: Objects: Searches obj for specific value and returns the first key to match. 
* `flatten()`: Arrays: Flattens an array with 1 level deep embedded arrays and returns all values in single array. 
* `head()`: Arrays: Returns the first element of an array. If no elements, returns an empty array. 
* `tail()`: Arrays: Returns an array with the first element removed. 
* `letterPositions()`: Takes in a string and returns an object containing all the index numbers for each letter found in the string. 
* `map(array, callback)`: Takes in an array and a callback function.  Returns an array with the callback function applied to each element. 
* `middle()`: Takes in an array and returns the: middle value if odd number in array, middle two values if even number in array, or [] if 2 or less items. 
* `takeUntil(array, callback)`: Takes an array and a callback function. Returns the elements of an array up until the point where callback function on each element turns true. 
* `without()`: Takes in an array and a specified item to remove from the array. Returns an array with the item removed from the original. 