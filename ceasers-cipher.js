/*
* ----------------------------------------------------------------------------------------
*  A function which takes a ROT13 encoded string as input and returns a decoded string.
* ----------------------------------------------------------------------------------------
*/

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' = 'N', 'B' = 'O' and so on.


function rot13(str) { // LBH QVQ VG!

    // The string is split into an array of substrings
    var letters = str.split('');

    // we then use the map method to find the unicode character in the array
    return letters.map(function (result) {

        //Assign the character code to the result variable
        result = result.charCodeAt();

        //In this if statement we check if the values are between 'A' and 'M'
        if (result >= 65 && result <= 77){

            //if condition is met add 13
            result +=13;

            // we check if value is between 'M' and 'N'
        } else if (result >= 78 && result <= 90){

            //if condition is met subtract 13
            result -=13;
        }

        // The fromCharCode() method converts Unicode values into characters.
        // Note: This is a static method of the String object, and the syntax is always String.fromCharCode().
        return String.fromCharCode(result);

    }).join('')

}

//logs out FREE PIZZA!
console.log(rot13("SERR CVMMN!"));