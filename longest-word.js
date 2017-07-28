/*
* ----------------------------------------------------------------------------------------
*  A function to find the length of the longest word using a for loop
* ----------------------------------------------------------------------------------------
*/
function findLongestWord(str) {
//split() method is used to split a string into an array of substrings, and returns the new array.
//we split the sentence into an array of words
	var words = str.split(" ");

//Here we declare the initial value for the longest word and set it to zero
	var longest = 0;

//We then use a for loop to iterate over each value of the array and comparing them to the longest value
	for (var i = 0; i < words.length; i++) {

//Here we use an if statement to compare values in the array and the longest variable and set the value based longest word
		if (words[i].length > longest) { 
			longest = words[i].length;
		}
	}

// longest value is returned
  	return longest;
}

// logs out 6
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));