/*
* ----------------------------------------------------------------------------------------
*  A function that chops off elements from the beginning of the array
* ----------------------------------------------------------------------------------------
*/
function slasher(arr, howMany) {

    // The slice() method returns the selected elements in an array, as a new array object.
    // The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

    return arr.slice(howMany);
}

// logs out [3]
console.log(slasher([1, 2, 3], 2));