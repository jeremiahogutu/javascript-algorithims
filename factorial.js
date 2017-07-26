
/*
* ----------------------------------------------------------------------------------------
* factorial of a number using reduce()
* ----------------------------------------------------------------------------------------
*/

function factorialize(num) {

//first we create an empty array of elements
var array = [];

//Here the if statement deals with factorial of zero
if (num===0) {
    return 1;
}

//populate the array using a for loop
for (var i = 1; i <= num; i++) {

//The push() method adds new items to the end of an array, and returns the new length
	array.push(i)
}

//The reduce() method reduces the array to a single value.
//The reduce() method executes a provided function for each value of the array (from left-to-right).
var answer = array.reduce(function(a,b){
	return a * b;
}); 
  return answer;
}

//logs out 120 to the console
console.log(factorialize(5));

//above we first took the value then used a for loop to populate an array based on the value passed in as a function argument. Since this is now an array we can use the reduce method which takes in an array and excecutes a function on each value from left to right in the array. It the return a single value. 
