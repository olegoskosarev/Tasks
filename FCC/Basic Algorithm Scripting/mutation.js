// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
    const str1 = arr[0].toLowerCase();
    const str2 = arr[1].toLowerCase();
    let count = 0;
  
    str2.split('').forEach(item => {
        if (str1.indexOf(item) !== -1) count++;
    });

    return count === str2.length;
}
  
mutation(["hello", "hey"]);