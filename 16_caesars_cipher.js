/*
CAESARS CIPHER
Description: "One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on."
*/

function rot13(str) {
	var alphabet, charInStr, charInAlpha, charShift, newChar, ciphered;
	alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	ciphered = "";
	for (var i = 0; i < str.length; i++) {
		charInStr = str.charAt(i);
		charInAlpha = alphabet.indexOf(charInStr);
		charShift = charInAlpha + 13;
		if (charShift > 25) {
			charShift = charShift - 26;
		}
		newChar = alphabet.charAt(charShift);
		if (charInAlpha == -1) {
			ciphered = ciphered + charInStr;
		} else {
			ciphered = ciphered + newChar;
		}
	}
	return ciphered;
}