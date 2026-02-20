var result;
var obj = {
  constructor: function () {}
};
obj.constructor[Symbol.species] = function () {
  return {
    exec: function () {}
  };
};
result = RegExp.prototype[Symbol.split].call(obj, '', 0);