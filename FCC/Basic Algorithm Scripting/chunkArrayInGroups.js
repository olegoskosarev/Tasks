// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    const result = [];
    let count = 0;
    let sub = [];
  
    for (let i = 0; i < arr.length; i++) {
        sub.push(arr[i]);
        count++;
      
        if (count === size) {
            result.push(sub);
            sub = [];
            count = 0;
        }
    }
    
    if (sub.length) result.push(sub);
  
    return result;
}
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);