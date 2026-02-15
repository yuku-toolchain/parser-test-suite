var mapSet = Map.prototype.set;
var counter = 0;
var iterable = [["foo", 1], ["bar", 2]];
var results = [];
var _this = [];
Map.prototype.set = function (k, v) {
  counter++;
  results.push([k, v]);
  _this.push(this);
  mapSet.call(this, k, v);
};
var map = new Map(iterable);