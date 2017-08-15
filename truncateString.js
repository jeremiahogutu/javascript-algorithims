/*
* ----------------------------------------------------------------------------------------
*  A function that returns a trunncated string
* ----------------------------------------------------------------------------------------
*/
function truncateString(str, num) {

//Here we check if num is equal to the original length if it's true then no need to truncate. return original string 
  if (str.length <= num) {
  	return str;
  } else if (num <= 3) {
// The slice() method returns the selected elements in an array, as a new array object.

// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
  	return str.slice(0, num) + "...";
  } else {
  	return str.slice(0, (num-3))+"...";
  }
}

//logs out A-tisket...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));