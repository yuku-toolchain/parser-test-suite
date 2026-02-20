var regexp = /./g;
var callCount = 0;
var arg;
var obj = {};
var str = 'abc';
RegExp.prototype[Symbol.matchAll] = function (string) {
  arg = string;
  callCount++;
  return obj;
};
regexp[Symbol.matchAll] = undefined;
regexp[Symbol.matchAll] = null;