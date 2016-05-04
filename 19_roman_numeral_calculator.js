/*
ROMAN NUMERAL CONVERTER
Description: "Convert the given number into a roman numeral."
*/

function convert(num) {
	var remain, romLevel, romStr, romCount, romCountLower, romCountHigher, i, j, romNum;

	var romans = {
		1000: {
			letter: "M",
			count: null
		},
		500: {
			letter: "D",
			count: null
		},
		100: {
			letter: "C",
			count: null
		},
		50: {
			letter: "L",
			count: null
		},
		10: {
			letter: "X",
			count: null
		},
		5: {
			letter: "V",
			count: null
		},
		1: {
			letter: "I",
			count: null
		}
	};

	var romArray = Object.keys(romans).reverse();

	function getCount() {
		if (num > 9999) {
			romNum = "error";
		} else {
			if (num >= romLevel) {
				remain = num % romLevel;
				num -= remain;
				romans[romLevel].count = num / romLevel;
				romCount = romans[romLevel].count;
				num = remain;
			}

			j = 0;
			romans[romLevel].str = "";
			if (romans[romLevel].count < 1) {
				romans[romLevel].str = null;
			} else if (romCount === 1) {
				romans[romLevel].str = romans[romLevel].letter;
			} else if (romCount <= 3) {
				while (j < romCount) {
					romans[romLevel].str += romans[romLevel].letter;
					j++;
				}
			} else if (romCount === 4) {
				if (romans[romArray[i - 1]].count !== 1) {
					romans[romLevel].str = romans[romLevel].letter + romans[romArray[i - 1]].letter;
				} else {
					romans[romArray[i - 1]].count = 0;
					romans[romArray[i - 1]].str = "";
					romans[romLevel].str = romans[romLevel].letter + romans[romArray[i - 2]].letter;
				}
			}
		}
	}
	for (i = 0; i < romArray.length; i++) {
		romLevel = romArray[i];
		romCountHigher = romArray[i - 1];
		getCount();
	}

	romNum = [];
	for (var prop in romans) {
		if (romans[prop].str !== "") {
			romNum.unshift(romans[prop].str);
		}
	}

	//return romans;
	return romNum.join("");
}