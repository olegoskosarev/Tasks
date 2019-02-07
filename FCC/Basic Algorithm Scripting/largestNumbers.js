// Return Largest Numbers in Arrays.

function largestOfFour(arr) {
    const largestNumbers = [];
  
    arr.forEach(function(item) {
        largestNumbers.push(Math.max(...item));
    });
    
    return largestNumbers;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);