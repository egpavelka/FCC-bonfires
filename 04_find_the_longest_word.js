/*
FIND THE LONGEST WORD IN A STRING
Description: "Return the length of the longest word in the provided sentence.  Your reponse should be a number."
*/

function palindrome(str) {
	str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
	var reverseStr = str.split("").reverse().join("");
	if (reverseStr === str) {
		return true;
	}
	return false;
}