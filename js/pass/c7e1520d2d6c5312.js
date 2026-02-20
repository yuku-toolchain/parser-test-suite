var thisValue;
var callMatchAll = function () {
  RegExp.prototype[Symbol.matchAll].call(thisValue, '');
};
thisValue = null;
thisValue = true;
thisValue = '';
thisValue = Symbol();
thisValue = 1;