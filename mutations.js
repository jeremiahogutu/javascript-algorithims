/*
* ----------------------------------------------------------------------------------------
*  A function that returns true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
* ----------------------------------------------------------------------------------------
*/


function mutation(arr) {

    var target = arr[0].toLowerCase();
    var word = arr[1].toLowerCase();

    //we loop through one letter at a time comparing the two strings
    for(var i = 0; i<word.length; i++){
        // The indexOf() method returns the position of the first occurrence of a specified value in a string.
        //
        // This method returns -1 if the value to search for never occurs.

         if(target.indexOf(word[0]) < 0){
            return false
         }
    }

    return true;
}


//logs out false

console.log(mutation(["hello", "hey"]));