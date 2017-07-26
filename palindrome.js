/*
* ----------------------------------------------------------------------------------------
* A function to check for palindromes using recursion
* ----------------------------------------------------------------------------------------
*/

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


function palindrome(str) {

//Here we use an if statement to deal with single letters so as to evaluate as true.	
  if (str.length <= 1) {

  	return true;

//The slice() method returns the selected elements in an array, as a new array object.
//The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
//

//compares the first letter and the last letter
  } else if (str[0] === str.slice(-1)) {

//call the function again and compares the characters. 
  	return palindrome(str.slice(1, -1));

  } else {

  	return false;

  }
  
}


//logs out true
console.log(palindrome("eye"));