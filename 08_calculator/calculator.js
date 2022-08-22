const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
  for (let i in array) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let result = array[0];
  for (let i in array) {
    i > 0 ? result *= array[i] : result;
  }
  return result;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
	let result = a;
  if (a === 0) {
    return 1;
  }
  for (let i = a - 1; i > 0; --i) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
