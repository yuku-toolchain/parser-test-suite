var first = {};
var second = {};
var added = [];
var add = WeakSet.prototype.add;
WeakSet.prototype.add = function (value) {
  added.push(value);
  return add.call(this, value);
};
var s = new WeakSet([first, second]);