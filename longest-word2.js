/*
* ----------------------------------------------------------------------------------------
*  A function to find the length of the longest word.
* ----------------------------------------------------------------------------------------
*/

function findLongestWord(str) {

//Here we declare the initial value for the longest word and set it to zero
	var longest = 0;

//split() method is used to split a string into an array of substrings, and returns the new array.
//forEach() method calls a provided function once for each element in an array, in order.


	str.split(" ").forEach(function(word){

//we use the for each method to call a function on each element of an array and then use an if statement to determine the longest word.

		if (word.length > longest){
			longest = word.length;
		}
	});

// returns the longest word
	return longest;
  
}

//logs out 6
findLongestWord("The quick brown fox jumped over the lazy dog");