# Javascript Algorithims


----------------------------------------------------------------------------------------
# A function that reverses a string
----------------------------------------------------------------------------------------

function reverseString(str) {

split() method takes a string and splits it into an array of substrings

	var array = str.split("");

reverse() method takes in an array and reverses the order of the elements in the array. It does not take strings thus the reason we used the split method previously to first convert the string to an array.

	array.reverse();

join() method takes in an ARRAY and joins the elements into a string

	var result = array.join("");


  return result;

}

logs out "olleh" to the console 

console.log(reverseString("hello"));
