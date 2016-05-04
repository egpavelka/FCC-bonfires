/*
DNA PAIRING
Description: "The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array."
*/

function pair(str) {

	var finalPairs = [],
		strArr = str.split("");

	for (var i = 0; i < strArr.length; i++) {

		var pairArr = [];

		pairArr.push(strArr[i]);

		if (strArr[i] === "A") {
			pairArr.push("T");
		} else if (strArr[i] === "T") {
			pairArr.push("A");
		} else if (strArr[i] === "G") {
			pairArr.push("C");
		} else if (strArr[i] === "C") {
			pairArr.push("G");
		}

		finalPairs.push(pairArr);

	}

	return finalPairs;
}