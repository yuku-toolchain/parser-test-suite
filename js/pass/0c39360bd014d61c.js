var counter = 0;
var add = WeakSet.prototype.add;
WeakSet.prototype.add = function (value) {
  counter++;
  return add.call(this, value);
};
var set = new WeakSet([]);