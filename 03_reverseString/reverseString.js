const reverseString = function(input) {
  const chars = input.split('');
  const reversedChars = chars.reverse();
  return reversedChars.reduce((prev, curr) => prev + curr, '');
};

// Do not edit below this line
module.exports = reverseString;
