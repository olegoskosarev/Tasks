// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
// The following are examples of valid formats for US numbers:

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// 1 555-555-5555
// 1(555)555-5555 
// 1 (555) 555-5555

function telephoneCheck(str) {
    if (str.length === 10 && str.match(/\d{10}/)) return true;
    // 5555555555

    if (str.length === 12 && str.match(/\d{3}[- ]\d{3}[- ]\d{4}/)) return true;
    // 555-555-5555
    // 555 555 5555

    if (str.length === 13 && str.match(/\(\d{3}\)\d{3}-\d{4}/)) return true;
    // (555)555-5555

    if (str.length === 14) {
        if (str.match(/\(\d{3}\) \d{3}-\d{4}/) || str.match(/1 \d{3}[- ]\d{3}[- ]\d{4}/) 
        || str.match(/1\(\d{3}\)\d{3}-\d{4}/)) return true;
        // (555) 555-5555
        // 1 555 555 5555
        // 1 555-555-5555
        // 1(555)555-5555        
        return false;   
    }

    if (str.length === 16 && str.match(/1 \(\d{3}\) \d{3}-\d{4}/)) return true;
    // 1 (555) 555-5555

    return false;
}
  
telephoneCheck("1 555 555 5555");