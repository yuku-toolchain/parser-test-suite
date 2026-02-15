var first = Symbol('a description');
var second = Symbol('a description');
var added = [];
var realAdd = WeakSet.prototype.add;
WeakSet.prototype.add = function (value) {
  added.push(value);
  return realAdd.call(this, value);
};
var s = new WeakSet([first, second, Symbol.hasInstance]);
WeakSet.prototype.add = realAdd;