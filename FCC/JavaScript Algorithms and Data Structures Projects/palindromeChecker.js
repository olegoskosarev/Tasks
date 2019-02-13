// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, 
// ignoring punctuation, case, and spacing.

function palindrome(string) {
	string = string.toLowerCase();
    
    const alphanum = string.match(/[\da-z]/g);

	for (let i = 0; i < Math.floor(alphanum.length / 2); i++) {
		if (alphanum[i] !== alphanum[alphanum.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

palindrome("1 eye for of 1 eye.");