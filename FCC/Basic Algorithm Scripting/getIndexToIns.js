// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.

function getIndexToIns(arr, num) {
    if (arr.length) {

        const result = arr.sort((a, b) => a - b);
        const sub = result.filter(item => item >= num);

        if (sub.length) {
            return result.indexOf(Math.min(...sub));
        } 
        else {
            return arr.length;
        }
    }

    return 0; 
}