/*
----------------------------------------------------------------------------------------
*  Shorter way to repeat a string using a terenary operator
* ----------------------------------------------------------------------------------------
*/
function repeatStringNumTimes(str, num) {

//The repeat() method returns a new string with a specified number of copies of the string it was called on.
	return num > 0 ? str.repeat(num) : "";
}