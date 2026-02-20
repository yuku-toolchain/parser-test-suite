var counter = 0;
var set = WeakMap.prototype.set;
WeakMap.prototype.set = function (value) {
  counter++;
  return set.call(this, value);
};
var map = new WeakMap([]);