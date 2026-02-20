var first = {};
var second = {};
var results = [];
var set = WeakMap.prototype.set;
WeakMap.prototype.set = function (key, value) {
  results.push({
    _this: this,
    key: key,
    value: value
  });
  return set.call(this, key, value);
};
var map = new WeakMap([[first, 42], [second, 43]]);