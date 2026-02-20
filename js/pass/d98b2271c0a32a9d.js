["toString", "valueOf"].forEach(function (key) {
  Object.defineProperty(this, key, {
    get: function () {}
  });
}, this);
var toPrimitive = Date.prototype[Symbol.toPrimitive];