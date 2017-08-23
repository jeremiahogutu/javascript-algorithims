/*
----------------------------------------------------------------------------------------
*  A function that removes all elements from the initial array that are of the same value as these arguments.
* ----------------------------------------------------------------------------------------
*/

function destroyer(arr) {

    // The arguments object is a local variable available within all functions. You can refer to a function's arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry's index starting at 0.

    // The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except length. For example, it does not have the pop method.
    var args = Array.prototype.slice.call(arguments, 1)

    // The filter() method creates an array filled with all array elements that pass a test (provided as a function).
    return arr.filter(function (item) {

        // The includes() method determines whether a string contains the characters of a specified string.
        // This method returns true if the string contains the characters, and false if not.
        return !args.includes(item)

    })
}

// log out [1,1]
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));