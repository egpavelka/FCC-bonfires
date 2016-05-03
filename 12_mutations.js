/*
MUTATIONS
Description: "Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array."
*/

function mutation(arr) {
	var firstWord = arr[0].toLowerCase().split("");
	var secondWord = arr[1].toLowerCase().split("");
	var i = 0;
	var isItHere = [];
	var strHere = [];
	while (i < secondWord.length) {
		isItHere = strHere.push((firstWord.indexOf(secondWord[i])));
		i++;
	}
	if (strHere.includes(-1)) {
		return false;
	} else {
		return true;
	}

}