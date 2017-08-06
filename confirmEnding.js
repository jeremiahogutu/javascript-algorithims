/*
* ----------------------------------------------------------------------------------------
*  A function that confirms the ending of a string
* ----------------------------------------------------------------------------------------
*/

// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {

//The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

// we use the regular expression /\w_/g to replace all non-word characters including underscores.
 	str = str.toLowerCase().replace(/\w_/g, "");
// we compare the values of the target and the last value  in the string
 	return target === str.slice(-Math.abs(target.length));
}

//logs out true
console.log(confirmEnding("Bastian", "n"));