const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let nString = "";
    for (let i = 0; i < num; ++i) {
        nString += string;
    }
    return nString;
};

// Do not edit below this line
module.exports = repeatString;
