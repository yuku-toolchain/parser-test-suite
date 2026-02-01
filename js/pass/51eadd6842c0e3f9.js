var obj = {};
obj[Symbol.toPrimitive] = function () {
  return [42];
};