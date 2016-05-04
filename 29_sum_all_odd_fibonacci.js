/*
SUM ALL ODD FIBONACCI NUMBERS
Description: "Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number."
*/

function sumFibs(num) {

	var prev = 0,
		cur = 1,
		total = 0;

	while (cur <= num) {

		if (cur % 2 !== 0) {
			total += cur;
		}

		var next = prev + cur;
		prev = cur;
		cur = next;

	}


	return total;
}