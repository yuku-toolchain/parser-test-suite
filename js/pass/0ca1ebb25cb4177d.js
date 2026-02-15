var y = {};
var retVal;
y[Symbol.toPrimitive] = function () {
  return retVal;
};
retVal = {};
retVal = new Number();
retVal = new String();