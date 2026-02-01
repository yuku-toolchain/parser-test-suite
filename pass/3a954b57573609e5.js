[Symbol.toPrimitive, "toString", "valueOf", "toISOString"].forEach(function (key) {
  Object.defineProperty(this, key, {
    get: function () {}
  });
}, this);
var toJSON = Date.prototype.toJSON;