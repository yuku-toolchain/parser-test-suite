var thisValue, args, result;
var callCount = 0;
var instance = [];
var Ctor = function () {
  callCount += 1;
  thisValue = this;
  args = arguments;
  return instance;
};
var a = [1, 2, 3, 4, 5];
a.constructor = {};
a.constructor[Symbol.species] = Ctor;
result = a.splice(2);