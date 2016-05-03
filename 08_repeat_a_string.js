/*
REPEAT A STRING REPEAT A STRING
Description: "Repeat a given string (first argument) NUM times (second argument). Return an empty string if NUM is a negative number."
*/

function repeat(str, num) {
	if (num <= 0) {
		str = "";
	} else {
		str = str.repeat(num);
	}
	return str;
}