// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

function frankenSplice(arr1, arr2, n) {
    const result = arr2.slice();
    result.splice(n, 0, ...arr1);
    return result;
}
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);