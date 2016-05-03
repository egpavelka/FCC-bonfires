/*
RETURN LARGEST NUMBERS IN ARRAYS
Description: "Return an array consisting of the largest number from each provided sub-array.  For simplicity, the provided array will contain exactly 4 sub-arrays."
*/

function largestOfFour(arr) {
	for (var i = 0; i < arr.length; i++) {
		var sortSubArray = arr[i].sort(function(a, b) {
			return a - b;
		});
		arr[i] = sortSubArray.pop();
	}
	return arr;
}