/*
TRUNCATE A STRING
Description: "Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending."
*/

function truncate(str, num) {
	var strChar = str.split("");

	if (num <= 3) {
		var shortStr = strChar.slice(0, num);
		strArray = shortStr.join("") + "...";
	} else if (num > 3 && num < str.length) {
		var longStr = strChar.slice(0, num - 3);
		strArray = longStr.join("") + "...";
	} else {
		strArray = str;
	}
	return strArray;
}