var y = {};
var retVal;
y[Symbol.toPrimitive] = function () {
  return retVal;
};
retVal = 1234;
retVal = '2016-06-03T19:03:52.872Z';
retVal = Symbol.toPrimitive;