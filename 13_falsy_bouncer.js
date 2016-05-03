/*
FALSY BOUNCER
Description: "Remove all falsy values from an array."
*/

function bouncer(arr) {
	var noBoolean = arr.filter(Boolean);
	return noBoolean;
}