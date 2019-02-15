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
    const regExp1 = /^\d{10}$/;
    // 5555555555
    const regExp2 = /^(?:1\s)?\d{3}([-\s]?)\d{3}\1\d{4}$/;
    // 555-555-5555
    // 555 555 5555
    // 1 555-555-5555
    // 1 555 555 5555
    const regExp3 = /^\(\d{3}\)\s?\d{3}-\d{4}$/;
    // (555)555-5555
    // (555) 555-5555
    const regExp4 = /^1(\s)?\(\d{3}\)\1\d{3}-\d{4}$/;
    // 1(555)555-5555 
    // 1 (555) 555-5555

    return !!(str.match(regExp1) || str.match(regExp2) || str.match(regExp3) || str.match(regExp4));
}
  
console.log(telephoneCheck("1 (555) 555-5555"));