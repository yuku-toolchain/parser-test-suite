var expectedThis = {};
var _this = [];
var map = new Map();
map.set(0, 0);
map.set(1, 1);
map.set(2, 2);
var callback = function () {
  _this.push(this);
};
map.forEach(callback, expectedThis);