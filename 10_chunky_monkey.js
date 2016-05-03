/*
CHUNKY MONKEY
Description: "Write a function that splits an array (first argument) into groups the length of SIZE (second argument) and returns them as a two-dimensional array."
*/

function chunk(arr, size) {
	var chunkArr = [];
	var i = 0;
	while (i < arr.length) {
		chunkArr.push(arr.slice(i, i += size));
	}
	return chunkArr;

}