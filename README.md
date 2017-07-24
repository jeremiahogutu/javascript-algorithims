# Javascript Algorithims


----------------------------------------------------------------------------------------
# A function that reverses a string
----------------------------------------------------------------------------------------

function reverseString(str) {

split() method that takes a string and splits it into an array 

	var array = str.split("");

reverse() method takes in an ARRAY reverses it. It does not take strings thus the reason we used the split method previously to make an array.

	array.reverse();

join() method takes in an ARRAY an array and joins it into a string

	var result = array.join("");

finally return a string

  return result;
}

log out my results to the console

console.log(reverseString("hello"));
