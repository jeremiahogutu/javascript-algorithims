/*
* ----------------------------------------------------------------------------------------
*  A function that finds the largest number in a subarray
* ----------------------------------------------------------------------------------------
*/

function largestOfFour(arr) {

// An empty array we'll use to store the largest numbers.
  var largestNumbers = [];

// We define a variable for the current largest number
  var currentLargest;

// We use a for loop to iterate through each subarray.
  for (var i = 0; i < arr.length; i++) {

// The value of the current largest is reset in each iteration
  	currentLargest = 0;

  	for (var j = 0; j < arr[i].length; j++) {

// Values in the subarray are compared to the current largest value 
  		if (arr[i][j] > currentLargest) {

  			currentLargest = arr[i][j];
  		}
  	}
  	
//The push() method adds new items to the end of an array, and returns the new length.
// The largest value is then added to the end of the array using the push method
  	largestNumbers.push(currentLargest);
  }

// An array of the largest number in each subarray is returned
  return largestNumbers;
}

// logs out the 5, 27, 39, 1001
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
