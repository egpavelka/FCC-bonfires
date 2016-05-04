/*
SUM ALL PRIMES
Description: "Sum all the prime numbers up to and including the provided number."
*/

function sumPrimes(num) {
	var arr = [],
		arrDiv = [];

	for (var i = 0; i <= num; i++) {
		arr.push(i);
		if (i > 1 && i < arr.length) {
			arrDiv.push(i);
		}
		for (var j = 0; j < (arrDiv.length - 1); j++) {

			if (arr[i] % arrDiv[j] === 0) {
				arr.splice(i, 1, 0);
			}
		}
	}

	arr = arr.reduce(function(a, b) {
		return a += b;
	}) - 1;

	return arr;
}