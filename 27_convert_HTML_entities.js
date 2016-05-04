/*
CONVERT HTML ENTITIES
Description: "Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities."
*/

function convert(str) {

	var match = {
		"&": "&amp;",
		"\'": "&apos;",
		'\"': "&quot;",
		">": "&gt;",
		"<": "&lt;"
	};

	for (var key in match) {

		if (!match.hasOwnProperty(key)) {
			continue;
		}

		str = str.replace(new RegExp(key, "g"), match[key]);
	}

	return str;
}