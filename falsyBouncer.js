
/*
* ----------------------------------------------------------------------------------------
*  A function that removes all falsy values from an array
* ----------------------------------------------------------------------------------------
*/

function bouncer(arr) {

    //The filter() method creates an array filled with all array elements that pass a test (provided as a function).
    return arr.filter(Boolean);
}

//logs out [7, "ate", 9]
console.log(bouncer([7, "ate", "", false, 9]));