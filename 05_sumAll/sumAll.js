const sumAll = function(x, y) {
    for (arg of arguments) {
        if (typeof arg != "number" || arg < 0) return "ERROR";
    }
    let sum = 0;
    
    if (x < y) {
        for (; x <= y; ++x) {
            sum += x;
        }
    }
    else {
        for (; x >= y; --x) {
            sum += x;
        }        
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
