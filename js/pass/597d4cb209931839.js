var set = Map.prototype.set;
var counter = 0;
Map.prototype.set = function (value) {
  counter++;
  set.call(this, value);
};
new Map([]);