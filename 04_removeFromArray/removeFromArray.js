const removeFromArray = function(array) {
  const args = [...arguments].slice(1);
  return array.filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
