Object.defineProperty(Array.prototype, "0", {
  set: function (v) {}
});
var arr = Array.of(true);
function Custom() {}
Object.defineProperty(Custom.prototype, "0", {
  set: function (v) {}
});
var custom = Array.of.call(Custom, true);