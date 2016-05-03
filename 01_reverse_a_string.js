/*
REVERSE A STRING
Description: "Reverse the provided string."
*/

function reverseString(str) {
	var array = str.split("");
	array.reverse("");
	str = array.join("");
	return str;
}