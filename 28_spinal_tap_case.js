/*
SPINAL TAP CASE
Description: "Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes."
*/

function spinalCase(str) {

	for (var i = 0; i < str.length; i++) {
		//str = str.replace(/[^a-z]/i)(?)
		if (str[i - 1]) {
			if (str[i - 1].match(/[^a-z]/i)) {
				str = str.replace(str[i - 1], "-");
			}
			str = str.replace(/([a-z])(?=[A-Z])/g, '$1-');
		}
	}

	return str.toLowerCase();
}