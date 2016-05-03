/*
TITLE CASE A SENTENCE
Description: "Return the provided string with the first letter of each word capitalized.  Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the and "of"."
*/

function titleCase(str) {
	var arrayStr = str.split(" ");
	for (var i = 0; i < arrayStr.length; i++) {
		var wordTail = arrayStr[i].substring(1).toLowerCase();
		arrayStr[i] = arrayStr[i][0].toUpperCase() + wordTail;

	}
	arrayStr = arrayStr.join(" ");
	return arrayStr;
}