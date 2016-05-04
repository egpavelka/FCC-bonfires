/*
WHERE DO I BELONG
Description: "Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted."
*/

function where(arr, num) {
	var placeMe = arguments[1];
	arr.push(placeMe);
	arr.sort(function order(a, b) {
		return a - b;
	});
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === placeMe) {
			return i;
		}
	}
}