/*
SLASHER FLICK
Description: "Return the remaining elements of an array after chopping off N elements from the head. The head means the beginning of the array, or the zeroth index."
*/

function slasher(arr, howMany) {
	if (howMany <= 0) {
		return arr;
	} else {
		var headsWillRoll = arr.splice(howMany, 1);
		return headsWillRoll;
	}
}