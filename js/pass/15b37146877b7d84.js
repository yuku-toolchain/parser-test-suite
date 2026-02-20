Object.defineProperty(Object.prototype, '', {
  set: function () {}
});
var wrapper;
JSON.parse('2', function () {
  wrapper = this;
});