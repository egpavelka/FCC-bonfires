/*
WHERE ART THOU
Description: "Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array."
*/

function where(collection, source) {
	var arr = [],
		matchKey = "",
		sourceKeys = "",
		sourceArr = Object.keys(source);

	function first(element) {

		sourceKeys = element;

	}

	// sourceKeys = title of key to match ["last"]
	// for each source

	function second(process) {

		if (process.hasOwnProperty(sourceKeys) && process[sourceKeys] !== null && source[sourceKeys] === process[sourceKeys]) {

			arr.push(process);

		}
	}


	sourceArr.forEach(first); // create sourceKeys -- use forEach to 

	collection.forEach(second);

	return arr;

}