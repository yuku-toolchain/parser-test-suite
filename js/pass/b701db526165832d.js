var faultyToPrimitive = {};
var returnValue;
faultyToPrimitive[Symbol.toPrimitive] = function () {
  return returnValue;
};
returnValue = {};
returnValue = [];
returnValue = (function () {
  return arguments;
})();