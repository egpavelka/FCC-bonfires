/*
CONFIRM THE ENDING
Description: "Check if a string (first argument, STR) ends with the given target string (second argument, TARGET)."
*/

function end(str, target) {

	var matchStr = target.split("");
	var arrayStr = str.split(" ");
	var lastWord = arrayStr.pop();
	var matchCount = 0 - matchStr.length;
	var lastPiece = lastWord.substr(matchCount);

	if (lastPiece === target) {
		return true;
	} else {
		return false;
	}

}