// Check if a string (first argument, str) ends with the given target string (second argument, target).
// Do not use the built-in method .endsWith() to solve the challenge.

function confirmEnding(str, target) {
    const end = str.slice(-target.length);
    return end === target;
}
  
confirmEnding("Bastian", "n");