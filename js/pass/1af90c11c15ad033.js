var obj = {};
obj[Symbol.toPrimitive] = function () {
  return Symbol.toPrimitive;
};