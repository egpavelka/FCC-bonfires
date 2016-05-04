/*
SEARCH AND REPLACE
Description: "Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after)."
*/

function myReplace(str, before, after) {

	function capsCheck() { // match case of first letters

		var beforeFirst = before.split("");
		var afterFirst = after.split("");

		if (beforeFirst[0] === beforeFirst[0].toUpperCase()) {
			afterFirst[0] = afterFirst[0].toUpperCase();
		} else {
			afterFirst[0] = afterFirst[0].toLowerCase();
		}

		after = afterFirst.join("");

	}

	var strArr = str.split(" "); // convert str to array

	var beforeIndex = strArr.indexOf(before); // find index of word to replace


	if (beforeIndex !== -1) {
		capsCheck();
		strArr.splice(beforeIndex, 1, after);
		str = strArr.join(" ");
	}


	return str;
}