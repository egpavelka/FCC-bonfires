/*
MISSING LETTERS
Description: "Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined."
*/

function fearNotLetter(str) {
	//check each letter in string for unicode value
	// if charCodeAt(0) = 97

	for (var i = 0; i < str.length - 1; i++) {

		if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1)) {

			var missing = String.fromCharCode(str.charCodeAt(i) + 1);

		}

	}

	return missing;
}