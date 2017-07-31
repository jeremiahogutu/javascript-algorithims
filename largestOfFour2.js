/*
----------------------------------------------------------------------------------------
*  A function that finds the largest number in a subarray using sort()
* ----------------------------------------------------------------------------------------
*/
function largestOfFour(arr) {

// An empty array we'll use to store the largest numbers.
  var largestNumber = [];

  // The forEach() method calls a provided function once for each element in an array, in order.
  arr.forEach(function(value){

// The sort() method sorts the items of an array.
// The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

  	largestNumber.push(value.sort(function(a, b){

// Values in the subarray are sorted in descending order
  		return b - a;

// Returns the first number from the sorted array
  	})[0]);
  });

// An array of the largest number in each subarray is returned
  return largestNumber;
}

// logs out the 5, 27, 39, 1001
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));