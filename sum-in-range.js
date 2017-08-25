/*
----------------------------------------------------------------------------------------
*  A function that returns the sum of two numbers and all numbers between them.
* ----------------------------------------------------------------------------------------
*/

function sumAll(arr) {

    //we first set the minimum and maximum values using math.min and math.max methods
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);

    //create an empty array to store the values,
    let result = [];

    //we use a for loop to iterate over the array
    for (let i = min; i <=max; i++) {

        //push the values to the result array
        result.push(i);
    }

    // The reduce() method reduces the array to a single value.
    // The reduce() method executes a provided function for each value of the array (from left-to-right).

    return result.reduce(function (a,b) {

        return a+b;
    });
}

//logs out 10
console.log(sumAll([1, 4]));