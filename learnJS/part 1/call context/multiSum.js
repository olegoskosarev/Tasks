function sum(a) {

    let result = a;

    function sub(b) {
        result += b;
        return sub;
    }

    sub.toString =  function() {
        return result;
    };

    return sub;
}

console.log(sum(0)(1)(2)(3)(4)(5)); // 15.