const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    let fiboA = 0;
    let fiboB = 1;
    for (let i = 1; i < n; ++i) {
        fiboB += fiboA;
        fiboA = fiboB - fiboA;
    }
    return fiboB;
};

// Do not edit below this line
module.exports = fibonacci;
