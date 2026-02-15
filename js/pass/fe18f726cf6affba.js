var y = {};
var retVal;
y[Symbol.toPrimitive] = function () {
  return retVal;
};
retVal = 86;
retVal = 'str';
retVal = Symbol.toPrimitive;