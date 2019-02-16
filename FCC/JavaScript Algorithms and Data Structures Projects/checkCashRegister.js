// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
// payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
// or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
// sorted in highest to lowest order, as the value of the change key.

//  $0.01 (PENNY) 
//  $0.05 (NICKEL)
//  $0.1 (DIME)
//  $0.25 (QUARTER)
//  $1 (DOLLAR)
//  $5 (FIVE)
//  $10 (TEN)
//  $20 (TWENTY)
//  $100 (ONE HUNDRED)

function checkCashRegister(price, cash, cid) {
    
    function round(value) {
        return Math.round(value * 100) / 100;
    }
    
    const cidCopy = cid;
    const difference = round(cash - price);
    const amount = round(cid.reduce(function(sum, item){
        return sum + item[1];
    }, 0));

    if (amount < difference) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    if (amount === difference) {
        return {status: "CLOSED", change: cid};
    }

    const change = [
        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["HUNDRED", 0]
    ];

    let diff = difference;
    while (diff !== 0) {
        if (diff >= 100 && cidCopy[8][1] !== 0) {
            step(8, 100); continue;
        }
        if (diff >= 20 && cidCopy[7][1] !== 0) {
            step(7, 20); continue;
        }
        if (diff >= 10 && cidCopy[6][1] !== 0) {
            step(6, 10); continue;
        }
        if (diff >= 5 && cidCopy[5][1] !== 0) {
            step(5, 5); continue;
        }
        if (diff >= 1 && cidCopy[4][1] !== 0) {
            step(4, 1); continue;
        }
        if (diff >= 0.25 && cidCopy[3][1] !== 0) {
            step(3, 0.25); continue;
        }
        if (diff >= 0.1 && cidCopy[2][1] !== 0) {
            step(2, 0.1); continue;
        }
        if (diff >= 0.05 && cidCopy[1][1] !== 0) {
            step(1, 0.05,); continue;
        }
        if (diff >= 0.01 && cidCopy[0][1] !== 0) {
            step(0, 0.01);
        }
        else {
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
    }

    function step(i, val) {
        cidCopy[i][1] = round(cidCopy[i][1] - val);
        change[i][1] = round(change[i][1] + val);
        diff = round(diff - val);
    }

    const result = [];
    change.forEach(function(item) {
        if (item[1]) result.push(item);
    });
    result.sort((a, b) => b[1] - a[1]);

    cid = cidCopy;
    return {status: "OPEN", change: result};
}
  
console.log(checkCashRegister(3.26, 100, 
    [
        ["PENNY", 1.01], 
        ["NICKEL", 2.05], 
        ["DIME", 3.1], 
        ["QUARTER", 4.25], 
        ["ONE", 90], 
        ["FIVE", 55], 
        ["TEN", 20], 
        ["TWENTY", 60], 
        ["ONE HUNDRED", 100]
    ])
);