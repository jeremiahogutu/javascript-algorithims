/*
* ----------------------------------------------------------------------------------------
*  A function that capitalizes the first letter of each word.
* ----------------------------------------------------------------------------------------
*/

function titleCase(str) {

//split() method is used to split a string into an array of substrings, and returns the new array.
//Here we use the split method to convert the string passed in as an argument to an array

	var array =str.split(' ');

//map() method creates a new array with the results of calling a function for every array element.

//we use the map method to call a function on each element and create a new array to be stored in the mapped variable.
  	var mapped = array.map(function(word){

//slice() method returns the selected elements in an array, as a new array object.

//we set the first character to uppercase then use the slice method to set the rest of the word to lowerCase


  		return word[0].toUpperCase() + word.slice(1).toLowerCase();
  	})

//join() method joins the elements of an array into a string, and returns the string.

//since the mapped variable is an array we use the join method to make the array a string.
  	return mapped.join(' ');
}

console.log(titleCase("I'm a little tea pot"));