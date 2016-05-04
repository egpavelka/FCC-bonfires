/*
SEARCH AND DESTROY
Description: "You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments."
*/

function destroyer(arr) {
	var killEm = [];
	for (var i = 1; i < arguments.length; i++) {
		killEm.push(arguments[i]);
	}
	var keepEm = arguments[0].filter(function(element, index) {
		var toReturn = true;
		for (var j = 0; j < killEm.length; j++) {
			if (element === killEm[j]) {
				toReturn = false;
			}
		}
		return toReturn;
	});

	return keepEm;
}