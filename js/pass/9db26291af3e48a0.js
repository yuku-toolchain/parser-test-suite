var thisValue, args, result;
var callCount = 0;
var instance = [];
var Ctor = function () {
  callCount += 1;
  thisValue = this;
  args = arguments;
  return instance;
};
var a = [];
a.constructor = {};
a.constructor[Symbol.species] = Ctor;
result = a.concat();