/*
FACTORIALIZE A NUMBER
Description: "Return the factorial of the provided integer."
*/

function factorialize(num) {
	if (num === 0) {
		return 1;
	}
	return num * factorialize(num - 1);
}