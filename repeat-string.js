/*
----------------------------------------------------------------------------------------
*  A function that repeats a string a given number of times.
* ----------------------------------------------------------------------------------------
*/
function repeatStringNumTimes(str, num) {
	if (num > 0) {
//The repeat() method returns a new string with a specified number of copies of the string it was called on.
		return str.repeat(num);
	} else {
//return an empty string if num is a negative number
		return "";
	}
}

//logs out abcabcabc
console.log(repeatStringNumTimes("abc", 3));
