/*
DIFF TWO ARRAYS
Description: "Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays."
*/

function diff(arr1, arr2) {
	var loner;
	var newArr = [];
	var tempArr = arr1.concat(arr2);

	for (var i = 0; i < tempArr.length; i++) {
		if (arr1.indexOf(tempArr[i]) === -1 || arr2.indexOf(tempArr[i]) === -1) {
			loner = tempArr[i];
		}
		if (loner) {
			newArr.push(loner);
		}
	}

	return newArr;

	// Same, same; but different.

}