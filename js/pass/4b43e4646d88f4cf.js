var toPrimitive = {};
var returnValue;
toPrimitive[Symbol.toPrimitive] = function () {
  return returnValue;
};
returnValue = 8;
returnValue = undefined;
returnValue = true;
returnValue = false;
returnValue = null;
returnValue = Symbol.toPrimitive;