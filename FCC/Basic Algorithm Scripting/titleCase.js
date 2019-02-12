// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

function titleCase(str) {
    return str.toLowerCase().split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ");    
}

titleCase("I'm a little tea pot");