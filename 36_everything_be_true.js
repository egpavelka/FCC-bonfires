/*
EVERYTHING BE TRUE
Description: "Check if the predicate (second argument) is truthy on all elements of a collection (first argument)."
*/

function every(collection, pre) {

	return collection.every(function(item) {
		return item[pre];
	});

}