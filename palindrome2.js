/*
* ----------------------------------------------------------------------------------------
* A function to check for palindromes 
* ----------------------------------------------------------------------------------------
*/

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


function palindrome(str) {
  
 //Regex code explanation
 // \W_ matches any non-word characters including underscore
 // g matches all characters
 
 //Here we use the toLowercase to make every character lowercase. We then use method chaining to add the replace method which searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
 

	str = str.toLowerCase().replace(/[\W_]/g, "");

//Here we use the split method to return an array of substrings. We then use method chaining to add the reverse method which revereses the order of elements in array. Finally we add the join method to which joins the elements of an array into a string, and returns the string
 
  return str === str.split("").reverse().join("")

  

}

//logs out true
console.log(palindrome("A man. A plan. A canal. Panama."));


