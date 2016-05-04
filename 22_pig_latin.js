/*
PIG LATIN
Description: "Translate the provided string to pig"
*/

function translate(str) {
	var i = 0,
		consonant = "", // store first letter if consonant
		vowels = ['a', 'e', 'i', 'o', 'u'], // create vowel array
		strArr = str.split(""); // split str into letter array


	if (vowels.indexOf(strArr[0]) !== -1) { // check if first letter is vowel
		strArr.push("way");
	} else {

		while (vowels.indexOf(strArr[i]) === -1) {

			consonant += strArr[i];

			i++;

		}

		strArr.push(consonant + "ay");

		strArr.splice(0, consonant.length);

	}


	str = strArr.join("");


	return str;
}