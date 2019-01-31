class Calculator {  
    constructor() {
        this.methods = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b
        }
    }

    calculate(str) {
        let operation = "";
        for (let key in this.methods) {
            if (str.indexOf(key) !== -1) operation = key;
        }

        if (operation) {
            const nums = str.split(" " + operation + " ");
            return this.methods[operation](+nums[0], +nums[1]);
        }

        return false;
        
    }

    addMethod(operation, func) {
        this.methods[operation] = func;
    }
}

const calculator = new Calculator();

calculator.addMethod("*", (a, b) => a * b);
calculator.addMethod("/", (a, b) => a / b);
calculator.addMethod("**", (a, b) => Math.pow(a, b));

console.log(calculator.calculate("100 + 13"));
console.log(calculator.calculate("3 - 10"));
console.log(calculator.calculate("5 * 6"));
console.log(calculator.calculate("125 / 5"));
console.log(calculator.calculate("2 ** 5"));