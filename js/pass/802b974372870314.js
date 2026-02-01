var y = {};
var retVal;
y[Symbol.toPrimitive] = function () {
  return retVal;
};
retVal = {};
retVal = (function () {
  return arguments;
})();