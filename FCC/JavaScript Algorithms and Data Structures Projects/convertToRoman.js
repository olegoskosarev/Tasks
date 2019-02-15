// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
	const collection = [
		['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
		['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
		['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
		['M', 'MM', 'MMM']
    ];
    
    let result = '';
    num = String(num);
    
	for (let i = 0; i < num.length; i++) {
		const current = num[num.length - 1 - i];
		if (current == 0) continue;
		result = collection[i][current - 1] + result;
    }
    
	return result;
}

convertToRoman(36);