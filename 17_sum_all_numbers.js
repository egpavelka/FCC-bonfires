/*
SUM ALL NUMBERS IN A RANGE
Description: "We'll pass you an array of two numbers.  Return the sum of those two numbers and all numbers between them."
*/

function sumAll(arr) {
	var min = Math.min.apply(Math, arr);
	var max = Math.max.apply(Math, arr);

	function list(a, b) {
		for (var i = a + 1; i < b; i++) {
			arr.push(i);
		}
	}

	list(min, max);
	return arr.reduce(function(a, b) {
		return a + b;
	});
}