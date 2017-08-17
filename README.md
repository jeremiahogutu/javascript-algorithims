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


----------------------------------------------------------------------------------------
# A function to check for palindromes 
----------------------------------------------------------------------------------------


A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


function palindrome(str) {
  
 Regex code explanation
 \W_ matches any non-word characters including underscore
 g matches all characters
 
 Here we use the toLowercase to make every character lowercase. We then use method chaining to add the replace method which searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
  

	str = str.toLowerCase().replace(/[\W_]/g, "");

Here we use the split method to return an array of substrings. We then use method chaining to add the reverse method which revereses the order of elements in array. Finally we add the join method to which joins the elements of an array into a string, and returns the string
  
  return str === str.split("").reverse().join("")

}

logs out true

console.log(palindrome("A man. A plan. A canal. Panama."));


----------------------------------------------------------------------------------------
# A function to check for palindromes using recursion
----------------------------------------------------------------------------------------


A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


function palindrome(str) {

Here we use an if statement to deal with single letters so as to evaluate as true.

  if (str.length <= 1) {

  	return true;

The slice() method returns the selected elements in an array, as a new array object.
The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.


compares the first letter and the last letter

  } else if (str[0] === str.slice(-1)) {

call the function again and compares the characters.

  	return palindrome(str.slice(1, -1));

  } else {

  	return false;

  }
  
}


logs out true

console.log(palindrome("eye"));

----------------------------------------------------------------------------------------
# A function to find the length of the longest word.
----------------------------------------------------------------------------------------


function findLongestWord(str) {

Here we declare the initial value for the longest word and set it to zero

	var longest = 0;

split() method is used to split a string into an array of substrings, and returns the new array.
forEach() method calls a provided function once for each element in an array, in order.


	str.split(" ").forEach(function(word){

we use the for each method to call a function on each element of an array and then use an if statement to determine the longest word.

		if (word.length > longest){
			longest = word.length;
		}
	});

returns the longest word

	return longest;
  
}

logs out 6

findLongestWord("The quick brown fox jumped over the lazy dog");


----------------------------------------------------------------------------------------
# A function to find the length of the longest word using a for loop
----------------------------------------------------------------------------------------

function findLongestWord(str) {

split() method is used to split a string into an array of substrings, and returns the new array.

we split the sentence passed in as an argument into an array of words.

	var words = str.split(" ");

Here we declare the initial value for the longest word and set it to zero

	var longest = 0;

We then use a for loop to iterate over each value of the array and comparing them to the longest value

	for (var i = 0; i < words.length; i++) {

Here we use an if statement to compare values in the array and the longest variable and then set the longest word to the bigger of the two.

		if (words[i].length > longest) { 
			longest = words[i].length;
		}
	}

longest value is returned

  	return longest;
}

logs out 6

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


----------------------------------------------------------------------------------------
# A function that capitalizes the first letter of each word.
----------------------------------------------------------------------------------------


function titleCase(str) {

split() method is used to split a string into an array of substrings, and returns the new array.

Here we use the split method to convert the string passed in as an argument to an array

	var array =str.split(' ');

map() method creates a new array with the results of calling a function for every array element.

Here we use the map method to call a function on each element and create a new array to be stored in the mapped variable.

  	var mapped = array.map(function(word){

slice() method returns the selected elements in an array, as a new array object.

we set the first character to uppercase then use the slice method to set the rest of the word to lowerCase


  		return word[0].toUpperCase() + word.slice(1).toLowerCase();
  	})

join() method joins the elements of an array into a string, and returns the string.

since the mapped variable is an array we use the join method to make the array a string.

  	return mapped.join(' ');
}

log out "I'm A Little Tea Pot"

console.log(titleCase("I'm a little tea pot"));


----------------------------------------------------------------------------------------
# A shorter way to complete the titleCase function.
----------------------------------------------------------------------------------------



function titleCase(str) {

  return str.split(' ').map(function(word){

  	return word[0].toUpperCase() + word.slice(1).toLowerCase();

  }).join(' ')

}

console.log(titleCase("I'm a little tea pot"));


----------------------------------------------------------------------------------------
#  A function that finds the largest number in a subarray using sort()
----------------------------------------------------------------------------------------

function largestOfFour(arr) {

An empty array we'll use to store the largest numbers.

  var largestNumber = [];

The forEach() method calls a provided function once for each element in an array, in order.

  arr.forEach(function(value){

The sort() method sorts the items of an array.

The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

    largestNumber.push(value.sort(function(a, b){

Values in the subarray are sorted in descending order

      return b - a;

Returns the first number from the sorted array

    })[0]);

  });

An array of the largest number in each subarray is returned

  return largestNumber;

}

logs out the 5, 27, 39, 1001

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

----------------------------------------------------------------------------------------
# A function that finds the largest number in a subarray
----------------------------------------------------------------------------------------

function largestOfFour(arr) {

An empty array we'll use to store the largest numbers.

  var largestNumbers = [];

We define a variable for the current largest number

  var currentLargest;

We use a for loop to iterate through each subarray.

  for (var i = 0; i < arr.length; i++) {

The value of the current largest is reset in each iteration

  	currentLargest = 0;

  	for (var j = 0; j < arr[i].length; j++) {

Values in the subarray are compared to the current largest value

  		if (arr[i][j] > currentLargest) {

  			currentLargest = arr[i][j];
  		}
  	}

The push() method adds new items to the end of an array, and returns the new length.

The largest value is then added to the end of the array using the push method

  	largestNumbers.push(currentLargest);
  }

An array of the largest number in each subarray is returned

  return largestNumbers;
}

logs out the 5, 27, 39, 1001

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


----------------------------------------------------------------------------------------
#  A function that confirms the ending of a string
----------------------------------------------------------------------------------------


Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {

The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

we use the regular expression /\w_/g to replace all non-word characters including underscores.

  str = str.toLowerCase().replace(/\w_/g, "");

we compare the values of the target and the last value  in the string

  return target === str.slice(-Math.abs(target.length));

}

logs out true

console.log(confirmEnding("Bastian", "n"));


----------------------------------------------------------------------------------------
#  A function that repeats a string a given number of times.
----------------------------------------------------------------------------------------

function repeatStringNumTimes(str, num) {

if statement to check if num value is a greater than zero

  if (num > 0) {

The repeat() method returns a new string with a specified number of copies of the string it was called on.

    return str.repeat(num);

  } else {

return an empty string if num is a negative number

    return "";

  }
}

logs out abcabcabc

console.log(repeatStringNumTimes("abc", 3));


----------------------------------------------------------------------------------------
#  Shorter way to repeat a string using a terenary operator
----------------------------------------------------------------------------------------

function repeatStringNumTimes(str, num) {

The repeat() method returns a new string with a specified number of copies of the string it was called on.

  return num > 0 ? str.repeat(num) : "";
}

logs out abcabcabc

console.log(repeatStringNumTimes("abc", 3));


----------------------------------------------------------------------------------------
#  A function that returns a trunncated string
----------------------------------------------------------------------------------------

function truncateString(str, num) {

we check if num is equal to the original length if it's true then no need to truncate. return original string 

  if (str.length <= num) {
    return str;
  } else if (num <= 3) {

The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

    return str.slice(0, num) + "...";

  } else {

    return str.slice(0, (num-3))+"...";
  }
}

logs out A-tisket...

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));



----------------------------------------------------------------------------------------
# A function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array
----------------------------------------------------------------------------------------


function chunkArrayInGroups(arr, size) {

create an empty array variable to store the new array

  var newArray = [];

counter variable to use as a condition for the while loop

  var counter = 0;

we run the while loop as long as the counter is less than the array length

  while (counter < arr.length) {

we use the push method to add the sliced array to the newArray

    newArray.push(arr.slice(counter, counter+size));

increment the counter to avoid an infinite loop

    counter+=size;
  }
  
  return newArray;
}

logs out [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));


----------------------------------------------------------------------------------------
#  A function that chops off elements from the beginning of the array
----------------------------------------------------------------------------------------

function slasher(arr, howMany) {

 The slice() method returns the selected elements in an array, as a new array object.
 
 The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

    return arr.slice(howMany);
}

logs out [3]

console.log(slasher([1, 2, 3], 2));



----------------------------------------------------------------------------------------
#  A function that returns true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
----------------------------------------------------------------------------------------



function mutation(arr) {

    var target = arr[0].toLowerCase();
    var word = arr[1].toLowerCase();

we loop through one letter at a time comparing the two strings

    for(var i = 0; i<word.length; i++){
    
The indexOf() method returns the position of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs.

         if(target.indexOf(word[0]) < 0){
            return false
         }
    }

    return true;
}


logs out false

console.log(mutation(["hello", "hey"]));