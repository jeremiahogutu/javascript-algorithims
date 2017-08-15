/*
* ----------------------------------------------------------------------------------------
*  A function tthat splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array
* ----------------------------------------------------------------------------------------
*/

function chunkArrayInGroups(arr, size) {

//empty array to store the new array
  var newArray = [];

//counter for the while loop
  var counter = 0;

//we run the while loop as long as the counter is less than the array length
  while (counter < arr.length) {

//we use the push method to add the sliced array to the newArray
  	newArray.push(arr.slice(counter, counter+size));

//increment the counter to avoid an infinite loop
  	counter+=size;
  }
  
  return newArray;
}

//logs out [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));