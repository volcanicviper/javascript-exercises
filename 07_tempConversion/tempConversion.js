const ftoc = function(temperature) {
  temperature = (temperature - 32) * 5/9;
  return Math.round(temperature * 10) / 10;
};

const ctof = function(temperature) {
  temperature = (temperature * 9/5) + 32;
  return Math.round(temperature * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
