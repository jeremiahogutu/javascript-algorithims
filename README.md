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

----------------------------------------------------------------------------------------
# Factorial of a number using reduce()
----------------------------------------------------------------------------------------


function factorialize(num) {

first we create an empty array of elements

var array = [];

Here the if statement deals with factorial of zero

if (num===0) {

    return 1;

}

populate the array using a for loop

for (var i = 1; i <= num; i++) {

The push() method adds new items to the end of an array, and returns the new length

	array.push(i)
	
}

The reduce() method reduces the array to a single value.
The reduce() method executes a provided function for each value of the array (from left-to-right).

var answer = array.reduce(function(a,b){

	return a * b;

}); 

  return answer;

}

logs out 120 to the console

console.log(factorialize(5));

In the above function we first took the value passed in as argument then used a for loop to populate an array. Since this is now an array we can use the reduce method which takes in an array and excecutes a function on each value from left to right in the array. It then returns a single value. 


----------------------------------------------------------------------------------------
# factorial of a number using recursion
----------------------------------------------------------------------------------------


we use recursion in this function

function factorialize(num) {

Here we create a base case to prevent this function from looping inifinitely. We also carter for factorial of zero.

	if (num==1 || num===0) {

		return 1;

	} else {

Here the function calls itself. we also reduce the number by one in every iteration

		return num * factorialize(num-1)
	}
}

logs out 120 to the console

console.log(factorialize(5));

short explantion as to how the values being returned in the function above

// return 1
// return 2 times 1
// return 3 times 2
// return 4 times 6
// return 5 times 24
// return 120