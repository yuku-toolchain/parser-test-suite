Object.defineProperty(Object.prototype, '', {
  set: function () {}
});
var value = {};
var wrapper;
JSON.stringify(value, function () {
  wrapper = this;
});