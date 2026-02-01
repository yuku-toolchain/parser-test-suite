Object.defineProperty(Object.prototype, '__proto__', {
  set: function () {}
});
var proto = {};
var object = {
  __proto__: proto
};