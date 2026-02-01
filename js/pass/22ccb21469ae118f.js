["name", "message"].forEach(function (key) {
  Object.defineProperty(this, key, {
    get: function () {}
  });
}, this);
var toString = Error.prototype.toString;