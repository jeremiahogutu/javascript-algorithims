/*
* ----------------------------------------------------------------------------------------------------------------------------------------------
*  A function that return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
* ----------------------------------------------------------------------------------------------------------------------------------------------
*/

function getIndexToIns(arr, num) {

    //we first push the number into the array
    arr.push(num);

    //The array is then sorted in ascending order after which we get the index of num
    return arr.sort(function (a,b) {
        return a-b;
    }).indexOf(num);
}

// logs out 1
console.log(getIndexToIns([40, 60], 50));
