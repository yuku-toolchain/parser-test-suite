var obj = {};
var sym = Symbol();
var callCount = 0;
var wrapper = {};
wrapper[Symbol.toPrimitive] = function () {
  callCount += 1;
  return sym;
};
obj[sym] = 0;