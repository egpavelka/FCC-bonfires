/*
CHECK FOR PALINDROMES
Description: "Return TRUE is the given string is a palindrome.  Otheriwse, return false."
*/

function palindrome(str) {
	str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
	var reverseStr = str.split("").reverse().join("");
	if (reverseStr === str) {
		return true;
	}
	return false;
}