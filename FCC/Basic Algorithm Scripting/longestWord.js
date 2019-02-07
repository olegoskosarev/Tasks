// Return the length of the longest word in the provided sentence.

function findLongestWordLength(str) {
    const words = str.split(" ");
    let max = 0;
  
    words.forEach(function(item) {
        if (item.length > max) max = item.length;
    });
  
    return max;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog")