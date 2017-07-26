
/*
* ----------------------------------------------------------------------------------------
* factorial of a number using recursion
* ----------------------------------------------------------------------------------------
*/

//we use recursion in this function 
function factorialize(num) {

//Here we create a base case to prevent this function from looping inifinitely. We also carter for factorial of zero.
	if (num==1) {
		return 1;
	} else {
// Here the function calls itself. we also reduce the number by one in every iteration
		return num * factorialize(num-1)
	}
}

//logs out 120 to the console
console.log(factorialize(5));

// short explantion as to how the values being returned in the function above
// return 1
// return 2 times 1
// return 3 times 2
// return 4 times 6
// return 5 times 24
// return 120

