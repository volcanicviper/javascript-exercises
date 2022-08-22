function noPunctuation(string) {
    return string
        .toLowerCase()
        .split('')
        .filter(char => /[a-zA-Z]/.test(char))
        .join('');
}

const palindromes = function(string) {
    let noPunct = noPunctuation(string);
    let reversed = "";
    for (let i = noPunct.length - 1; i >= 0; --i) {
        reversed += noPunct[i];
    }
    return reversed === noPunct;
};

// Do not edit below this line
module.exports = palindromes;
