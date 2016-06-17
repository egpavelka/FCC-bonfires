/*
SMALLEST COMMON MULTIPLE
Description: "Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order."
*/


function smallestCommons(arr) {

	// Assign greater value to a, lesser to b
	var min = 0,
		max = 0,
		range = [];

	if (arr[0] < arr[1]) {
		min = arr[0];
		max = arr[1];
	} else {
		min = arr[1];
		max = arr[0];
	}
	// Create array with integer range between a and b
	for (var i = min; i <= max; i++) {
		if (i > 1) {
			range.push(i);
		}
	}

function gcf (a,b) {
		if (!b) {
			return a;
		}
		else {
			return gcf(b, a%b);
		}
	}
  
function scm(a,b) {
	return (a*b)/gcf(a,b);
}

var ans = min;
  
range.forEach(function(n) {
	ans = scm(ans, n);
});

return ans;
}

console.log(smallestCommons([1,5]));