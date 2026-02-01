["source", "flags"].forEach(function (key) {
  Object.defineProperty(this, key, {
    get: function () {}
  });
}, this);
var toString = RegExp.prototype.toString;