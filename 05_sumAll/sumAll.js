const sumAll = function(int1, int2) {
  if (!Number.isInteger(int1) || !Number.isInteger(int2) ||
      int1 < 0 || int2 < 0) {
    return 'ERROR';
  }

  const start = int1 > int2 ? int2 : int1;
  const length = Math.abs(int1 - int2) + 1;
  const range = [...Array(length).keys()].map(val => val + start);
  return range.reduce((prev, curr) => prev + curr);
};

// Do not edit below this line
module.exports = sumAll;
