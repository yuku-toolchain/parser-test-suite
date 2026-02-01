var booleanCount = 0;
Boolean.prototype.then = function () {
  booleanCount += 1;
};
Promise.prototype.catch.call(true);
var numberCount = 0;
Number.prototype.then = function () {
  numberCount += 1;
};
Promise.prototype.catch.call(34);
var stringCount = 0;
String.prototype.then = function () {
  stringCount += 1;
};
Promise.prototype.catch.call('');
var symbolCount = 0;
Symbol.prototype.then = function () {
  symbolCount += 1;
};
Promise.prototype.catch.call(Symbol());